<template lang="pug">
.fv-autocomplete
  v-autocomplete(
    v-model="model"
    :items="items"
    :filter="filter"
    :loading="isLoading"
    :item-value="itemValue"
    :disabled="disabled"
    :return-object="returnObject"
    :chips="chips"
    :auto-select-first="autoSelectFirst"
    :multiple="multiple"
    :append-icon="appendIcon"
    :placeholder="placeholder"
    :dense="dense"
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
        v-list-item-content(v-text="data.item")
    template(v-slot:selection="data")
      slot(
        name="selection"
        v-bind:item="data.item"
      )
        v-list-item-content(v-text="data.item")
    template(v-slot:append-item)
      slot(name="append-item")
</template>

<script>
export default {
  name: 'FvAutocomplete',
  inheritAttrs: true,
  props: {
    element: {
      type: undefined,
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
    },
    returnObject: {
      type: Boolean,
      default() {
        return false
      }
    },
    chips: {
      type: Boolean,
      default() {
        return false
      }
    },
    autoSelectFirst: {
      type: Boolean,
      default() {
        return false
      }
    },
    multiple: {
      type: Boolean,
      default() {
        return false
      }
    },
    appendIcon: {
      type: String,
      default() {
        return null
      }
    },
    placeholder: {
      type: String,
      default() {
        return null
      }
    },
    dense: {
      type: Boolean,
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
  computed: {
    model: {
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
