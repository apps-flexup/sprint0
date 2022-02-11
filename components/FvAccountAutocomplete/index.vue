<template lang="pug">
.fv-account-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :element="value"
    :items="items"
    :returnObject="returnObject"
    @autocomplete:selected="accountSelected"
  )
    template(v-slot:label)
      p {{ label }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title {{ accountName(data.item) }}
    template(v-slot:selection="data")
      div {{ accountName(data.item) }}
</template>

<script>
export default {
  name: 'FvAccountAutocomplete',
  props: {
    value: {
      type: Number,
      default() {
        return null
      },
    },
    label: {
      type: String,
      default() {
        return null
      },
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
    returnObject: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
  methods: {
    accountSelected(v) {
      this.$emit('account:selected', v)
    },
    accountName(account) {
      return this.$displayRules.accountName(account)
    },
  },
}
</script>
