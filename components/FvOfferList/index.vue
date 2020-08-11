<template lang="pug">
  .fv-offer-list
    v-card
      fv-data-table-header(
        :title="$t('table.offers.title')"
        :searchLabel="$t('table.offers.search')"
        @dataTableSearch:changed="searchChanged"
      )
      fv-offer-data-table(
        :search="search"
      )
</template>

<script>
export default {
  name: 'FvOfferList',
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    searchChanged(v) {
      console.log('Search is now: ', v)
      this.search = v
    }
  }
}
</script>
