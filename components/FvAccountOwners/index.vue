<template lang="pug">
.fv-account-owners
  fv-third-party-account-autocomplete.mb-5(
    :toRemove="toRemove"
    :showActiveAccount="true"
    @thirdPartyAccount:selected="ownerSelected"
  )
  fv-owner-data-table(
    data-testid="ownerList"
    :headers="headers"
    :items="items"
    @dataTable:delete:owner="deleteOwner"
    @dataTable:setReferenceOwner:owner="setReferenceOwner"
  )
</template>

<script>
export default {
  name: 'FvAccountOwners',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    isNewObject: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      selectedOwners: this.value,
      toRemoveWithData: {
        activeAccount: [],
        localThirdParties: [],
        flexupThirdParties: [],
        flexupAccounts: []
      }
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headers('owners')
      res[res.length - 1].displayed = true
      return res
    },
    items() {
      return this.selectedOwners
    },
    toRemove() {
      const res = {}
      Object.keys(this.toRemoveWithData).forEach((key) => {
        const list = this.toRemoveWithData[key]
        res[key] = list.map((owner) => owner.id)
      })
      return res
    }
  },
  mounted() {
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('owners/get')
    if (this.isNewObject) {
      this.addActiveAccountAsDefaultOwner()
    }
  },
  methods: {
    ownerSelected(owner) {
      const ownerRole = {
        from_id: undefined,
        to_type: owner.directory === 'Local' ? 'ThirdParty' : 'Account',
        to_id: owner.directory === 'Flexup' ? owner.flexup_id : owner.id,
        role: 'owner',
        data: null,
        status: owner.directory === 'Local' ? 'Confirmed' : 'WaitingConfirmation'
      }
      if (this.selectedOwners.length === 0) {
        ownerRole.data = {}
        ownerRole.data.isReferenceOwner = true
      }
      this.selectedOwners.push(ownerRole)
      if (owner.directory === 'Local') {
        this.addToOwnerListToRemove('localThirdParties', owner.id, ownerRole)
      } else if (owner.directory === 'Flexup') {
        this.addToOwnerListToRemove('flexupThirdParties', owner.id, ownerRole)
      } else if (owner.id === this.$activeAccount.get()) {
        this.addToOwnerListToRemove('activeAccount', owner.id, ownerRole)
      } else {
        this.addToOwnerListToRemove('flexupAccounts', owner.id, ownerRole)
      }
      this.emitOwnersChangedEvent()
    },
    addActiveAccountAsDefaultOwner() {
      const accountId = this.$activeAccount.get()
      const account = this.$store.getters['accounts/findById'](accountId)
      this.ownerSelected(account)
    },
    emitOwnersChangedEvent() {
      this.$emit('payload:changed', this.selectedOwners)
    },
    deleteOwner(owner) {
      const index = this.findOwnerIndex(owner)
      if (index > -1) {
        this.removeFromOwnerListToRemove(owner)
        this.selectedOwners.splice(index, 1)
        if (this.selectedOwners.length === 1) {
          const singleOwnerIndex = 0
          this.setOwnerAsReferenceOwner(singleOwnerIndex)
        }
      }
      this.$emit('payload:changed', this.selectedOwners)
    },
    setReferenceOwner(owner) {
      const index = this.findOwnerIndex(owner)
      if (index > -1) {
        this.unsetReferenceOwner()
        this.setOwnerAsReferenceOwner(index)
        this.emitOwnersChangedEvent()
      }
    },
    findOwnerIndex(owner) {
      const index = this.selectedOwners.findIndex(
        (selectedOwner) => selectedOwner.to_id === owner.to_id && selectedOwner.to_type === owner.to_type
      )
      return index
    },
    unsetReferenceOwner() {
      this.selectedOwners.forEach((selectedOwner) => {
        if (selectedOwner.data) {
          selectedOwner.data.isReferenceOwner = false
        }
      })
    },
    setOwnerAsReferenceOwner(index) {
      const data = {
        isReferenceOwner: true
      }
      this.selectedOwners[index].data = data
    },
    addToOwnerListToRemove(key, ownerId, ownerData) {
      const list = this.toRemoveWithData[key]
      list.push({ id: ownerId, data: ownerData })
      this.toRemoveWithData[key] = list
    },
    removeFromOwnerListToRemove(owner) {
      if (owner.to_type === 'ThirdParty') {
        this.removeOwnerFrom('localThirdParties', owner)
      } else if (owner.to_id === this.$activeAccount.get()) {
        this.removeOwnerFrom('activeAccount', owner)
      } else {
        const removed = this.removeOwnerFrom('flexupThirdParties', owner)
        if (!removed) {
          this.removeOwnerFrom('flexupAccounts', owner)
        }
      }
    },
    removeOwnerFrom(key, owner) {
      const list = this.toRemoveWithData[key]
      const index = list.findIndex((ownerWithData) => ownerWithData.data.to_id === owner.to_id)
      if (index > -1) {
        list.splice(index, 1)
        this.toRemoveWithData[key] = list
        return true
      }
      return false
    }
  }
}
</script>
