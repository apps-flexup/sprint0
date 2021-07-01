<template lang="pug">
.fv-unit-autocomplete
  fv-autocomplete(
    data-testid='autocomplete'
    :element="unitId"
    :items="items"
    :filter="filter"
    :returnObject="true"
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
    value: {
      type: Object,
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
    unitId() {
      const dimension = this.value ? this.value.dimension : null
      const unit = this.value ? this.value.unit : null
      const res = this.$store.getters['units/findByDimension'](dimension, unit)
      return res ? res.id : null
    }
  },
  mounted() {
    this.$store.dispatch('units/get')
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      const payload = {
        unit: v.symbole,
        dimension: v.dimension
      }
      this.$emit('unit:selected', payload)
    },
    filter(item, v, it) {
      return filterUnitAutocomplete(item, v, it)
    }
  }
}
</script>
