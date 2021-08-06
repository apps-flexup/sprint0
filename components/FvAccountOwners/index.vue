<template lang="pug">
.fv-account-owners
  fv-account-autocomplete.mb-5(
    data-testid="ownerAutocomplete"
    :items="autocompleteItems"
    :returnObject="false"
    @account:selected="ownerSelected"
  )
  fv-owner-data-table(
    data-testid="ownerList"
    :headers="headers"
    :items="items"
    @dataTable:delete:owner="deleteOwner"
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
    }
  },
  data() {
    return {
      allAccounts: [],
      selectedOwners: this.value
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headers('owners')
      res[res.length - 1].displayed = true
      return res
    },
    autocompleteItems() {
      const res = this.allAccounts.filter((account) => {
        return !this.selectedOwners.some((owner) => {
          return owner.to_id === account.id
        })
      })
      return res
    },
    items() {
      return this.selectedOwners
    }
  },
  mounted() {
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('owners/get')
    this.addActiveAccountAsDefaultOwner()
    this.$directory.allAccounts().then((accounts) => {
      this.allAccounts = accounts
    })
  },
  methods: {
    ownerSelected(ownerId) {
      const ownerRole = {
        from_type: 'Account',
        from_id: undefined,
        to_type: 'Account',
        to_id: ownerId,
        role: 'owner',
        data: null,
        status: 'WaitingConfirmation'
      }
      if (this.selectedOwners.length === 0) {
        ownerRole.data = {}
        ownerRole.data.isReferenceOwner = true
      }
      this.selectedOwners.push(ownerRole)
      this.emitOwnersChangedEvent()
    },
    addActiveAccountAsDefaultOwner() {
      if (!this.value.length) {
        const accountId = this.$activeAccount.get()
        this.ownerSelected(accountId)
      }
    },
    emitOwnersChangedEvent() {
      this.$emit('payload:changed', this.selectedOwners)
    },
    deleteOwner(owner) {
      const index = this.selectedOwners.findIndex(
        (selectedOwner) => selectedOwner.to_id === owner.to_id
      )
      if (index > -1) {
        this.selectedOwners.splice(index, 1)
        if (this.selectedOwners.length === 1) {
          const data = {
            isReferenceOwner: true
          }
          this.selectedOwners[0].data = data
        }
      }
      this.$emit('payload:changed', this.selectedOwners)
    }
  }
}
</script>
