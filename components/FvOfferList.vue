<template lang="pug">
  .fv-offer-list
    fv-offer-list-search(
      :offers="items"
    )
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
  name: 'FvOfferList',
  computed: {
    headers() {
      const res = this.$store.getters['headers/offers']
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$store.getters['offers/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('offers/get')
    this.$store.dispatch('headers/getOfferHeaders')
  }
}
</script>

<style lang="scss" scoped>
.fv-offer-list {
  background-color: inherit;
}
</style>
