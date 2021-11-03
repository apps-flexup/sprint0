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
    template(v-slot:item.name="{ item }")
      div {{ displayName(item) }}
    template(v-slot:item.type="{ item }")
      div {{ displayType(item) }}
    template(v-slot:item.actions="{ item }")
      v-row
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
    this.$store.dispatch('countries/get')
    this.$store.dispatch('contracts/getLegalStructures')
  },
  methods: {
    displayName(item) {
      const res = this.$displayRules.accountName(item)
      return res
    },
    displayType(item) {
      return this.$displayRules.accountType(item)
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
