<template lang="pug">
.fv-quantity-selector
  fv-text-field(
    :value="quantity.toString()"
    :outlined="true"
    :clearable="false"
    class="centered-input"
  )
    template(v-slot:prepend)
      v-col
        fv-minus-button(
          @button:minus="minus"
        )
    template(v-slot:append)
      v-col
        fv-plus-button(
          @button:plus="plus"
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

<style>
.col {
  padding: 0 !important;
}
.centered-input input {
  text-align: center;
}
</style>
