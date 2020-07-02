<template lang="pug">
  .fv-product-autocomplete
    p {{ $options.name }}
    fv-auto-complete(
      v-model="this.product"
      :items="items"
      :label="$t('forms.orders.new.product')"
      @autocomplete:selected="selected"
    )
</template>

<script>
export default {
  name: 'FvProductAutocomplete',
  props: {
    product: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$activeAccount.products()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      this.$emit('products:selected', v)
    }
  }
}
</script>
