<template lang="pug">
.fv-account-owners
  fv-account-autocomplete(
    data-testid="ownerAutocomplete"
    :items="items"
    @account:selected="ownerSelected"
  )
  div(data-testid="ownerList")
    v-row(v-for="owner in selectedOwners")
      v-col(cols="12")
        v-chip(
          data-testid="owner"
          :key="owner.name"
          close
          color="white"
          @click:close="removeOwner(owner)"
        ) {{ owner.name }}
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
      selectedOwners: this.value
    }
  },
  computed: {
    items() {
      const allAccounts = this.$store.getters['directory/all']
      const res = allAccounts.filter((account) => {
        return !this.selectedOwners.some((a) => {
          return a.name === account.name
        })
      })
      return res
    }
  },
  mounted() {
    this.$store.dispatch('accounts/all')
    this.addActiveAccountAsDefaultOwner()
  },
  methods: {
    ownerSelected(v) {
      this.selectedOwners.push(v)
      this.emitOwnersChangedEvent()
    },
    removeOwner(owner) {
      const index = this.selectedOwners.indexOf(owner)
      if (index !== -1) {
        this.selectedOwners.splice(index, 1)
        this.emitOwnersChangedEvent()
      }
    },
    addActiveAccountAsDefaultOwner() {
      if (!this.value.length) {
        const accountId = this.$activeAccount.get()
        const account = this.$store.getters['accounts/findById'](accountId)
        if (account) {
          this.ownerSelected(account)
        }
      }
    },
    emitOwnersChangedEvent() {
      this.$emit('payload:changed', this.selectedOwners)
    }
  }
}
</script>
