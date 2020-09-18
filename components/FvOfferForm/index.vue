<template lang="pug">
.fv-offer-form
  p {{ $options.name }}
  v-row
    v-col(cols="12")
      fv-product-autocomplete(
        :product="productId"
        @products:selected="productSelected"
      )
  v-row
    v-col(cols="12")
      v-text-field(
        v-model="name"
        :label="$t('forms.offers.new.name')"
        outlined=''
        @input="nameChanged"
      )
  v-row
    v-col(cols="6")
      fv-price-field(
        :value="price"
        :label="$t('forms.offers.new.price')"
        @price:changed="priceChanged"
      )
  v-row
    v-col(cols='6')
      fv-vat-field(
        :value="vat"
        :label="$t('forms.offers.new.vat')"
        @vat:changed="vatChanged"
      )
    v-col(cols='6')
      fv-unit-autocomplete(
        :dimension="dimension"
        :unit="unit"
        @unit:selected="unitSelected"
      )
</template>

<script>
export default {
  name: 'FvOfferForm',
  props: {
    offer: {
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
      if (Object.entries(this.offer).length === 0) {
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
      // this.$activeAccount.getProduct(v).then((product) => {
      this.$repos.products.show(v).then((product) => {
        this.productId = product ? product.id : null
        this.unit = product ? product.unit : null
        this.dimension = product ? product.dimension : null
        this.name = product ? product.name : null
        const payload = {
          productId: this.productId,
          unit: this.unit,
          dimension: this.dimension,
          name: this.name
        }
        const res = Object.assign(this.localOffer, payload)
        this.$emit('offer:changed', res)
      })
    },
    nameChanged() {
      const payload = {
        name: this.name
      }
      const res = Object.assign(this.localOffer, payload)
      this.$emit('offer:changed', res)
    },
    priceChanged(v) {
      this.price = v
      const payload = {
        price: this.price
      }
      const res = Object.assign(this.localOffer, payload)
      this.$emit('offer:changed', res)
    },
    vatChanged(v) {
      this.vat = v
      const payload = {
        vat: this.vat
      }
      const res = Object.assign(this.localOffer, payload)
      this.$emit('offer:changed', res)
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
      this.$emit('offer:changed', res)
    },
    fillFieldsWithOffer() {
      if (!this.offer) return
      this.productId = this.offer.product_id
      this.name = this.offer.name
      this.price = this.offer.price
      this.currency = this.offer.currency
      this.unit = this.offer.unit
      this.vat = this.offer.vat
      this.dimension = this.offer.dimension
      this.localOffer = this.offer
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
