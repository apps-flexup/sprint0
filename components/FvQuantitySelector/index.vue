<template lang="pug">
.fv-quantity-selector
  fv-text-field(
    data-testid="quantitySelector"
    :value="quantity.toString()"
    :hideDetails="true"
    :dense="dense"
    @input="input"
  )
    template(v-slot:prepend-inner)
        fv-icon(
          data-testid="buttonMinus"
          @icon:clicked="minus"
          icon="mdi-minus"
        )
    template(v-slot:append)
        fv-icon(
          data-testid="buttonPlus"
          @icon:clicked="plus"
          icon="mdi-plus"
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
      },
    },
    dense: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
  methods: {
    minus() {
      this.$emit('quantitySelector:changed', parseInt(this.quantity - 1))
    },
    plus() {
      this.$emit('quantitySelector:changed', parseInt(this.quantity + 1))
    },
    input(v) {
      this.$emit('quantitySelector:changed', parseInt(v))
    },
  },
}
</script>

<style scoped>
.fv-quantity-selector {
  max-width: 120px;
}
::v-deep .v-input input {
  text-align: center;
}
</style>
