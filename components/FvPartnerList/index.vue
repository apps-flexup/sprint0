<template lang="pug">
  .fv-partner-list
    p {{ $options.name }}
    v-row(v-for="item in items" :key="item.id")
      v-col(cols="3")
        span.name {{ item.name }}
        <br />
        span.address {{ item.address }} {{ item.zip }} {{ item.city }}
      v-col(cols="2")
        span.metrics {{ item.metrics.contracts }} inflexion contracts
      v-col(cols="2")
        span.metrics {{ item.metrics.products }} inflexion produits
      v-col(cols="2")
        span.metrics {{ item.metrics.commandes }} inflexion commandes
      v-col(cols="3")
        span {{ item.metrics.next.daysRemaining }} inflexion jours
        span {{ item.metrics.next.amount }}  {{ item.metrics.next.currency }}
</template>
<script>
export default {
  name: 'FvPartnerList',
  computed: {
    headers() {
      const res = this.$store.getters['headers/contacts']
      return res
    },
    items() {
      const res = this.$store.getters['contacts/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-partner-list {
  .name {
    font-weight: bold;
  }
  .address {
    font-weight: lighter;
    font-size: 0.8em;
  }
  .metrics {
    font-weight: 400;
  }
}
</style>
