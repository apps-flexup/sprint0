<template lang="pug">
.fv-product-step-detail
  v-row
    v-col(cols='12')
      fv-text-field(
        data-testid='productName'
        :value="name"
        :label="$t('forms.products.new.name')"
        @input="nameChanged"
      )
  v-row
    v-col(cols='12')
      fv-unit-autocomplete(
        data-testid='unitAutocomplete'
        :dimension="dimension"
        :unit="unit"
        @unit:selected="unitSelected"
      )
</template>

<script>
export default {
  name: 'FvProductStepDetail',
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    name() {
      const res = this.payload ? this.payload.name : null
      return res
    },
    unit() {
      const res = this.payload ? this.payload.unit : null
      return res
    },
    dimension() {
      const res = this.payload ? this.payload.dimension : null
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    nameChanged(name) {
      const payload = {
        name
      }
      this.$emit('payload:changed', payload)
    },
    unitSelected(v) {
      const unit = this.$store.getters['units/find'](v)
      const payload = {
        dimension: unit ? unit.dimension : null,
        unit: unit ? unit.symbole : null
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>

<style scoped>
.row {
  justify-content: center;
}
.information {
  display: flex;
  font-size: 18px;
}
.bold {
  font-weight: 500;
}
.headText {
  font-weight: 100;
}
</style>
