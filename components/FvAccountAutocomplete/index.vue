<template lang="pug">
.fv-account-account
  fv-autocomplete(
    data-testid="autocomplete"
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
