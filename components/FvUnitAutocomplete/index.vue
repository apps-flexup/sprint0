<template lang="pug">
.fv-unit-autocomplete
  fv-autocomplete(
    data-testid='autocomplete'
    :element="unitId"
    :items="items"
    :dense="dense"
    :filter="filter"
    :returnObject="true"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      p {{ $t('forms.products.new.unit') }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title {{ displayedUnit(data.item) }}
    template(v-slot:selection="data")
      div {{ displayedUnit(data.item) }}
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
    },
    dense: {
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
  },
  methods: {
    selected(v) {
      const unit = this.getUnitFromValue(v)
      const payload = {
        unit: unit ? unit.symbole : null,
        dimension: unit ? unit.dimension : null
      }
      this.$emit('unit:selected', payload)
      this.emitGenericSignalForForm(payload)
    },
    filter(item, v, it) {
      item = {
        ...item,
        symbole: this.$t(`units.symbol.${item.symbole}`),
        dimension: this.$t(`units.dimension.${item.dimension}`)
      }
      return filterUnitAutocomplete(item, v, it)
    },
    emitGenericSignalForForm(payload) {
      this.$emit('payload:changed', payload)
    },
    getUnitFromValue(v) {
      if (typeof v === 'number') {
        return this.$store.getters['units/find'](v)
      }
      return v
    },
    displayedUnit(item) {
      if (!item) return ''
      const symbole = this.$t(`units.symbol.${item.symbole}`)
      if (!symbole) return ''
      const dimension = this.$t(`units.dimension.${item.dimension}`)
      const res = `${symbole} (${dimension})`
      return res
    }
  }
}
</script>
