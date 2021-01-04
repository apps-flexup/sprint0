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
      v-text-field(
        data-testid="textField"
        v-model="name"
        :label="$t('forms.offers.new.name')"
        outlined=''
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
  data() {
    return {
      localOffer: {},
      productId: null,
      name: null,
      price: null,
      currency: null,
      vat: null,
      unit: null,
      dimension: null
    }
  },
  watch: {
    offer() {
      if (Object.entries(this.payload).length === 0) {
        this.clearOffer()
      } else {
        this.fillFieldsWithOffer()
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('products/get')
    this.fillFieldsWithOffer()
  },
  methods: {
    productSelected(v) {
      // this.$repos.products.show(v).then((product)
      const product = this.$store.getters['products/findById'](v)
      this.productId = product ? product.id : null
      this.unit = product ? product.unit : null
      this.dimension = product ? product.dimension : null
      this.name = product ? product.name : null
      const payload = {
        product_id: this.productId,
        unit: this.unit,
        dimension: this.dimension,
        name: this.name
      }
      const res = Object.assign(this.localOffer, payload)
      this.$emit('payload:changed', res)
    },
    nameChanged() {
      const payload = {
        name: this.name
      }
      const res = Object.assign(this.localOffer, payload)
      this.$emit('payload:changed', res)
    },
    priceChanged(v) {
      this.price = v
      const payload = {
        price: parseInt(this.price)
      }
      const res = Object.assign(this.localOffer, payload)
      this.$emit('payload:changed', res)
    },
    vatChanged(v) {
      this.vat = v
      const payload = {
        vat: this.vat
      }
      const res = Object.assign(this.localOffer, payload)
      this.$emit('payload:changed', res)
    },
    unitSelected(v) {
      const unit = this.$store.getters['units/find'](v)
      this.dimension = unit ? unit.dimension : null
      this.unit = unit ? unit.symbole : null
      const payload = {
        unit: this.unit,
        dimension: this.dimension
      }
      const res = Object.assign(this.localOffer, payload)
      this.$emit('payload:changed', res)
    },
    fillFieldsWithOffer() {
      if (!this.payload) return
      this.productId = this.payload.product_id
      this.name = this.payload.name
      this.price = this.payload.price
      this.currency = this.payload.currency
      this.unit = this.payload.unit
      this.vat = this.payload.vat
      this.dimension = this.payload.dimension
      this.localOffer = this.payload
    },
    clearOffer() {
      this.productId = null
      this.name = null
      this.price = null
      this.currency = null
      this.vat = null
      this.unit = null
      this.dimension = null
      this.localOffer = {}
    }
  }
}
</script>

<style scoped>
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
}
</style>
