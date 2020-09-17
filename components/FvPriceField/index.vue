<template lang="pug">
.fv-price-field
  fv-number-field(
    :value="price"
    :label="label"
    :outlined="outlined"
    :readonly="readonly"
    :clearable="clearable"
    :suffix="currency.symbole"
    @input="priceChanged"
    @click:outside="onClickOutside"
  )
</template>

<script>
export default {
  name: 'FvPriceField',
  props: {
    value: {
      type: String,
      default() {
        return ''
      }
    },
    label: {
      type: String,
      default() {
        return ''
      }
    },
    outlined: {
      type: Boolean,
      default() {
        return true
      }
    },
    readonly: {
      type: Boolean,
      default() {
        return false
      }
    },
    clearable: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      price: this.value
    }
  },
  computed: {
    currency() {
      const iso = this.$store.getters['accounts/preferredCurrency']
      const res = this.$store.getters['currencies/findIso'](iso)
      console.log('res: ', res)
      return res
    }
  },
  watch: {
    value() {
      this.price = this.value
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('currencies/get')
  },
  methods: {
    priceChanged(v) {
      this.price = v
      this.$emit('price:changed', this.price)
    },
    onClickOutside() {
      if (this.price) {
        this.price = (Math.round(this.price * 100) / 100).toFixed(2)
        this.priceChanged(this.price)
      }
    }
  }
}
</script>
