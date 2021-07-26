<template lang="pug">
.fv-account-owners-readonly
  fv-owner-data-table(
    :headers="headers"
    :items="items"
  )
</template>

<script>
export default {
  name: 'FvAccountOwnersReadonly',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headers('owners')
      return res
    },
    items() {
      const res = this.value.map((ownerId) => {
        return this.$store.getters['owners/findById'](ownerId)
      })
      return res
    }
  },
  mounted() {
    this.$store.dispatch('owners/get')
  }
}
</script>
