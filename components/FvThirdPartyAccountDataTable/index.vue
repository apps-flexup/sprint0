<template lang="pug">
.fv-third-party-account-data-table
  fv-data-table(
    data-testid="dataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    template(v-slot:item.legal_structure_id="{ item }")
      div {{ displayLegalStructure(item.legal_structure_id) }}
    template(v-slot:item.country_id="{ item }")
      div {{ displayCountry(item.country_id) }}
    template(v-slot:item.actions="{ item }")
      v-row
        v-icon.mr-2(small='' @click.stop="showContract(item)")
          | mdi-briefcase
        fv-edit-action(@edit:clicked="selected(item)")
        fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
export default {
  name: 'FvThirdPartyAccountDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      }
    },
    headers: {
      type: Array,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getThirdPartyAccountHeaders')
    this.$store.dispatch('thirdPartyAccounts/getAll')
    this.$store.dispatch('countries/get')
    this.$store.dispatch('contracts/getLegalStructures')
  },
  methods: {
    displayLegalStructure(legalStructureId) {
      const res = this.$displayRules.legalStructure(legalStructureId)
      return res
    },
    displayCountry(countryId) {
      const res = this.$displayRules.country(countryId)
      return res
    },
    showContract(v) {
      const res = v.account_id
      this.$router.push(`/thirdPartyAccounts/contracts/${res}`)
    },
    selected(v) {
      this.$emit('dataTable:selected', v)
    },
    deleteItem(v) {
      this.$store.dispatch('thirdPartyAccounts/remove', v)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    }
  }
}
</script>
