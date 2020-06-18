<template lang="pug">
  .fv-contact-list
    p {{ $options.name }}
    v-row.contact-list-item(v-for="item in items" :key="item.id")
      v-col(cols="3")
        span.name {{ item.name }}
        br
        span.address {{ item.address }} {{ item.zip }} {{ item.city }}
      v-col(cols="2")
        span.metrics
        | {{ $tc('table.partners.metrics.contracts', item.metrics.contracts) }}
      v-col(cols="2")
        span.metrics
        | {{ $tc('table.partners.metrics.products', item.metrics.products) }}
      v-col(cols="2")
        span.metrics
        | {{ $tc('table.partners.metrics.commandes', item.metrics.commandes) }}
      v-col(v-if='item.metrics.next.amount > 0' cols="3")
        span.next {{ $t('table.partners.next.payment') }}
        br
        span.settlement
        | {{ $tc('table.partners.next.days-remaining', item.metrics.next.daysRemaining ) }}&nbsp;
        span.amount {{ item.metrics.next.amount }}&nbsp;{{ item.metrics.next.currency }}
      v-col(v-else cols="3")
        span.next Nothing
</template>
<script>
export default {
  name: 'FvContactList',
  computed: {
    headers() {
      const res = this.$store.getters['headers/contacts']
      return res
    },
    items() {
      const res = this.$store.getters['contacts/all']
      console.log('res: ', res)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('contacts/get')
  }
}
</script>
<style lang="scss" scoped>
.fv-contact-list {
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
  .next {
    font-weight: lighter;
  }
  .amount {
    font-weight: bold;
  }
}
</style>
