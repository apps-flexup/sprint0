<template lang="pug">
.fv-quantity-selector
  fv-text-field(
    :value="quantity.toString()"
    :outlined="false"
  )
    template(v-slot:append)
      v-col
        fv-plus-button(
          @button:plus="plus"
        )
        fv-minus-button(
          @button:minus="minus"
        )
</template>

<script>
export default {
  name: 'FvModalActions',
  props: {
    quantity: {
      type: Number,
      default() {
        return 1
      }
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    minus() {
      this.$emit('quantitySelector:minus')
    },
    plus() {
      this.$emit('quantitySelector:plus')
    }
  }
}
</script>
