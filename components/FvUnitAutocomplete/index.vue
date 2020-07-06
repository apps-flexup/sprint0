<template lang="pug">
  .fv-unit-autocomplete
    v-autocomplete(
      v-model="unitId"
      :items="items"
      :filter="filter"
      :loading="isLoading"
      :label="$t('forms.products.new.unit')"
      item-text="name"
      item-value="id"
      clearable=''
      outlined=''
      @change="selected"
    )
      template(v-slot:item="data")
        v-list-item-content
          v-list-item-title {{ `${data.item.symbole} (${data.item.dimension})` }}
      template(v-slot:selection="data")
        div {{ `${data.item.symbole} (${data.item.dimension})` }}
</template>

<script>
import { filterListAutocomplete } from '~/plugins/utils'
export default {
  name: 'FvUnitAutocomplete',
  inheritAttrs: true,
  promps: {
    element: {
      type: Number,
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
    items() {
      const res = this.$store.getters['units/all']
      return res
    },
    unitId: {
      get() {
        return this.element
      },
      set(v) {
        this.$emit('unit:selected', v)
      }
    }
  },
  watch: {
    search(val) {
      // console.log('search :', val)
      val && val !== this.element && this.filterList(val)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    // this.$store.dispatch('units/get')
  },
  methods: {
    selected(v) {
      this.$emit('unit:selected', v)
    },
    filter(item, v, it) {
      return filterListAutocomplete(item, v, it)
    }
  }
}
</script>
