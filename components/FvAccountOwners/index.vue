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
      if (typeof this.selectedOwners[0] !== 'number') {
        return this.selectedOwners
      }
      const res = selectedOwnersIds.map((ownerId) => {
        const storedOwner = this.$store.getters['owners/findById'](ownerId)
        if (storedOwner) return storedOwner
        return { to_id: ownerId }
      })
      console.log('items: ', res)
      return res
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
    ownerSelected(v) {
      this.selectedOwners.push(v)
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
        (ownerId) => ownerId === owner.to_id
      )
      if (index > -1) {
        this.selectedOwners.splice(index, 1)
      }
      this.$emit('payload:changed', this.selectedOwners)
    }
  }
}
</script>
