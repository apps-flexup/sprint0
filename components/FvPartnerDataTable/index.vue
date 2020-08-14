<template lang="pug">
  .fv-partner-data-table
    v-data-table.elevation-2(
      :headers='headers'
      :items='items'
      item-key='id'
      @click:row='selected'
      :search="search"
      :custom-filter="filterFunction"
    )
      template(v-slot:item.legal_structure="{item}")
        div(v-if="item.legalStructure") {{ item.legalStructure.name }}
      template(v-slot:item.country="{item}")
        div(v-if="item.country") {{ item.country.name }}
      template(v-slot:item.actions="{ item }")
        v-row
          v-icon.mr-2(small='' @click.stop="showContract(item)")
            | mdi-briefcase
          fv-edit-action(@edit:clicked="selected(item)")
          fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
import { filterPartnersDataTable, translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvPartnerDataTable',
  props: {
    search: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/partners']
      res.push({ text: 'headers.actions', value: 'actions', sortable: false })
      return translateHeaders(this.$i18n, res)
    },
    items() {
      const res = this.$activeAccount.partners()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getPartnerHeaders')
    this.$store.dispatch('partners/get')
    this.$store.dispatch('countries/get')
    this.$store.dispatch('contracts/getLegalStructures')
  },
  methods: {
    showContract(v) {
      const res = v.account_id
      this.$router.push(`/partners/contracts/${res}`)
    },
    selected(v) {
      this.$emit('dataTable:selected', v)
    },
    deleteItem(v) {
      console.log('delete :', v)
      this.$store.dispatch('partners/remove', v)
    },
    filterFunction(item, queryText, itemText) {
      return filterPartnersDataTable(item, queryText, itemText)
    }
  }
}
</script>
