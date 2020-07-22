<template lang="pug">
  .fv-autocomplete
    v-autocomplete(
      v-model="elementId"
      :items="items"
      :filter="filter"
      :loading="isLoading"
      :item-value="itemValue"
      :disabled="disabled"
      clearable=''
      outlined=''
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
      template(v-slot:append-item)
        slot(name="append-item")
</template>

<script>
import { VAutocomplete } from 'vuetify/lib'

export default {
  name: 'FvAutocomplete',
  inheritAttrs: true,
  components: {
    VAutocomplete
  },
  props: {
    element: {
      type: Number,
      default() {
        return null
      }
    },
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
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    elementId: {
      get() {
        return this.element
      },
      set(v) {
        this.$emit('autocomplete:selected', v)
      }
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  }
}
</script>
