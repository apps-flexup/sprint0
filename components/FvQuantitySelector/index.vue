<template lang="pug">
.fv-quantity-selector
  fv-text-field(
    :value="quantity.toString()"
    :outlined="true"
    :clearable="false"
    :hideDetails="true"
    :dense="true"
    class='centered-input'
  )
    template(v-slot:prepend)
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
</style>
