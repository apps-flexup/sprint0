<template lang="pug">
.fv-quantity-selector
  fv-text-field(
    :value="quantity.toString()"
    :clearable="false"
    :hideDetails="true"
    :dense="dense"
    class='centered-input'
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
      this.$emit('quantitySelector:minus')
    },
    plus() {
      this.$emit('quantitySelector:plus')
    }
  }
}
</script>

<style>
.centered-input input {
  text-align: center;
}
.fv-quantity-selector {
  max-width: 120px;
}
</style>
