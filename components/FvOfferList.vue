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
          @click:row='selected'
        )
          template(v-slot:item.name='{ item }')
            div(v-to-locale="item.name")
          template(v-slot:item.unit='{ item }')
            div(v-to-unit="item")
          template(v-slot:item.status='{ item }')
            fv-status-progress-atom(:status="item.status")
          template(v-slot:item.actions='{ item }')
            v-icon.mr-2(small='' @click.stop='selected(item)')
              | mdi-pencil
            v-icon(small='' @click.stop='deleteItem(item)')
              | mdi-delete
</template>

<script>
export default {
  name: 'FvOfferList',
  computed: {
    headers() {
      const res = this.$activeAccount.headersOffers()
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$activeAccount.offers()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOfferHeaders')
  },
  methods: {
    selected(offer) {
      this.$emit('list:selected', offer)
    },
    deleteItem(offer) {
      this.$store.dispatch('offers/remove', offer)
    }
  }
}
</script>
