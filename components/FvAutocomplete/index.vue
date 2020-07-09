<template lang="pug">
  .fv-autocomplete
    v-autocomplete(
      :items="items"
      :filter="filter"
      :loading="isLoading"
      :item-value="itemValue"
      clearable=''
      outlined=''
      @change="selected"
    )
      template(v-slot:label)
        slot(name="label")
      template(v-slot:item="data")
        slot(
          name="item"
          v-bind:item="data.item"
        )
      template(v-slot:selection="data")
        slot(
          name="selection"
          v-bind:item="data.item"
        )
</template>

<script>
export default {
  name: 'FvAutocomplete',
  inheritAttrs: true,
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    itemValue: {
      type: String,
      default() {
        return 'id'
      }
    },
    filter: {
      type: Function,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    selected(v) {
      this.$emit('autocomplete:selected', v)
    }
  }
}
</script>
