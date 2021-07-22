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
      selectedOwners: this.value,
      displayableOwners: {}
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headers('owners')
      res[res.length - 1].displayed = true
      return res
    },
    autocompleteItems() {
      const selectedOwnersIds = this.selectedOwners
      const res = this.allAccounts.filter((account) => {
        return !selectedOwnersIds.some((ownerId) => {
          return ownerId === account.id
        })
      })
      return res
    },
    items() {
      const selectedOwnersIds = this.selectedOwners
      const res = selectedOwnersIds.map((ownerId) => {
        return this.$store.getters['owners/findById'](ownerId)
      })
      return res
    }
  },
  mounted() {
    this.$store.dispatch('accounts/get')
    this.addActiveAccountAsDefaultOwner()
    this.$directory.allAccounts().then((accounts) => {
      this.allAccounts = accounts
    })
    this.value.forEach((ownerId) => {
      this.addDisplayableOwner(ownerId)
    })
  },
  methods: {
    ownerSelected(v) {
      this.selectedOwners.push(v)
      this.addDisplayableOwner(v)
      this.emitOwnersChangedEvent()
    },
    removeOwner(ownerId) {
      const index = this.selectedOwners.indexOf(ownerId)
      if (index !== -1) {
        this.selectedOwners.splice(index, 1)
        this.emitOwnersChangedEvent()
      }
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
    addDisplayableOwner(ownerId) {
      console.log('ownerID: ', ownerId)
      const account = this.$store.getters['accounts/findById'](ownerId)
      console.log('account: ', account)
      if (!account) {
        this.$directory.getAccountById(ownerId).then((res) => {
          this.$set(this.displayableOwners, ownerId, res.name)
        })
      } else {
        this.$set(this.displayableOwners, ownerId, account.name)
      }
    },
    deleteOwner(owner) {
      const index = this.selectedOwners.findIndex(
        (ownerId) => ownerId === owner.to_id
      )
      if (index > -1) {
        this.selectedOwners.splice(index, 1)
      }
    }
  }
}
</script>
