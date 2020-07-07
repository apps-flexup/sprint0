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
