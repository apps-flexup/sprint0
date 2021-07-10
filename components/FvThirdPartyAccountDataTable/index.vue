<template lang="pug">
.fv-third-party-account-data-table
  fv-data-table(
    data-testid="dataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    template(v-slot:item.legal_structure_id="{ item }")
      div {{ displayLegalStructure(item) }}
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
    },
    options: {
      type: Object,
      default() {
        return null
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('countries/get')
    this.$store.dispatch('contracts/getLegalStructures')
  },
  methods: {
    displayLegalStructure(item) {
      const res = this.$displayRules.legalStructure(item)
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
