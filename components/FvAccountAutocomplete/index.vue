<template lang="pug">
.fv-account-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :element="value"
    :items="items"
    :returnObject="true"
    @autocomplete:selected="accountSelected"
  )
    template(v-slot:label)
      p {{ label }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title {{ data.item.name }}
    template(v-slot:selection="data")
      div {{ data.item.name }}
</template>

<script>
export default {
  name: 'FvAccountAutocomplete',
  props: {
    value: {
      type: Number,
      default() {
        return null
      }
    },
    label: {
      type: String,
      default() {
        return null
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    accountSelected(v) {
      this.$emit('account:selected', v)
    }
  }
}
</script>
