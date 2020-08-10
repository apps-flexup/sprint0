<template lang="pug">
  .fv-partner-list
    v-card
      fv-data-table-header(
        :title="$t('table.partners.title')"
        :searchLabel="$t('table.partners.search')"
        @dataTableSearch:changed="searchChanged"
      )
      fv-partner-data-table(
        :search="search"
      )
</template>

<script>
export default {
  name: 'FvPartnerList',
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
      this.search = v
    }
  }
}
</script>
