<template lang="pug">
.fv-quantity-selector
  fv-text-field(
    data-testid="quantitySelector"
    :value="quantity.toString()"
    :clearable="false"
    :hideDetails="true"
    :dense="dense"
    class='centered-input'
    @input="input"
  )
    template(v-slot:prepend-inner)
        fv-icon(
          @icon:clicked="minus"
          icon="mdi-minus"
        )
    template(v-slot:append)
        fv-icon(
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
      }
    },
    dense: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
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
    }
  }
}
</script>

<style scoped>
.centered-input input {
  text-align: center;
}
.fv-quantity-selector {
  max-width: 120px;
}
</style>
