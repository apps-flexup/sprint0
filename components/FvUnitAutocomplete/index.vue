<template lang="pug">
.fv-unit-autocomplete
  fv-autocomplete(
    :element="unitId"
    :items="items"
    :filter="filter"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      p {{ $t('forms.products.new.unit') }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title {{ `${data.item.symbole} (${data.item.dimension})` }}
    template(v-slot:selection="data")
      div {{ `${data.item.symbole} (${data.item.dimension})` }}
</template>

<script>
import { filterUnitAutocomplete } from '~/plugins/utils'
export default {
  name: 'FvUnitAutocomplete',
  inheritAttrs: true,
  props: {
    unit: {
      type: String,
      default() {
        return null
      }
    },
    dimension: {
      type: String,
      default() {
        return null
      }
    },
    dimensionFilter: {
      type: String,
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
      let res = this.$store.getters['units/all']
      if (this.dimensionFilter) {
        res = res.filter((unit) => unit.dimension === this.dimensionFilter)
      }
      return res
    },
    unitId: {
      get() {
        const res = this.$store.getters['units/findByDimension'](
          this.dimension,
          this.unit
        )
        return res ? res.id : null
      },
      set(v) {
        this.$emit('unit:selected', v)
      }
    }
  },
  mounted() {
    this.$store.dispatch('units/get')
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      this.$emit('unit:selected', v)
    },
    filter(item, v, it) {
      return filterUnitAutocomplete(item, v, it)
    }
  }
}
</script>
