<template lang="pug">
.fv-offer-step-detail
  p {{ $options.name }}
  v-row
    v-col(cols="12")
      fv-product-autocomplete(
        data-testid="productAutocomplete"
        :product="productId"
        @products:selected="productSelected"
      )
  v-row
    v-col(cols="12")
      fv-text-field(
        data-testid="nameField"
        :value="name"
        :label="$t('forms.offers.new.name')"
        @input="nameChanged"
      )
  v-row
    v-col(cols="6")
      fv-price-field(
        data-testid="priceField"
        :value="price"
        :label="$t('forms.offers.new.price')"
        @price:changed="priceChanged"
      )
  v-row
    v-col(cols='6')
      fv-vat-field(
        data-testid="vatField"
        :value="vat"
        :label="$t('forms.offers.new.vat')"
        @vat:changed="vatChanged"
      )
    v-col(cols='6')
      fv-unit-autocomplete(
        data-testid="unitAutocomplete"
        :dimensionFilter="dimension"
        :dimension="dimension"
        :unit="unit"
        @unit:selected="unitSelected"
      )
</template>

<script>
import { convert } from '~/plugins/currencies'
export default {
  name: 'FvOfferStepDetail',
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    productId() {
      const res = this.payload ? this.payload.product_id : null
      return res
    },
    name() {
      const res = this.payload ? this.payload.name : null
      return res
    },
    currency() {
      const res = this.payload ? this.payload.currency : null
      return res
    },
    vat() {
      const res = this.payload ? this.payload.vat : null
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
  asyncComputed: {
    async price() {
      const price = this.payload ? this.payload.price : null
      if (!price) return null
      const fromCurrency = this.currency
      if (!fromCurrency) return null
      const settings = this.$store.getters['settings/settings']
      if (!settings) return null
      const toCurrency = settings.currency
      if (!toCurrency) return null
      const res = await convert(fromCurrency, toCurrency, price)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('products/get')
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    productSelected(v) {
      const product = this.$store.getters['products/findById'](v)
      const payload = {
        product_id: product ? product.id : null,
        unit: product ? product.unit : null,
        dimension: product ? product.dimension : null,
        name: product ? product.name : null
      }
      this.$emit('payload:changed', payload)
    },
    nameChanged(name) {
      const payload = {
        name
      }
      this.$emit('payload:changed', payload)
    },
    priceChanged(v) {
      const payload = {
        price: v.price,
        currency: v.currency
      }
      this.$emit('payload:changed', payload)
    },
    vatChanged(v) {
      const payload = {
        vat: v
      }
      this.$emit('payload:changed', payload)
    },
    unitSelected(v) {
      const unit = this.$store.getters['units/find'](v)
      const payload = {
        unit: unit ? unit.symbole : null,
        dimension: unit ? unit.dimension : null
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
