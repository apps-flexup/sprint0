<template lang="pug">
  .fv-partner-list
    v-row
      v-col(cols="12")
        v-data-table.elevation-2(
          :headers='headers'
          :items='items'
          item-key='id'
        )
</template>

<script>
export default {
  name: 'FvPartnerList',
  computed: {
    headers() {
      const res = this.$store.getters['headers/partners']
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$store.getters['partners/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('partners/get')
    this.$store.dispatch('headers/getPartnerHeaders')
  }
}
</script>
<style lang="scss" scoped>
.fv-partner-list {
  background-color: inherit;
}
</style>
