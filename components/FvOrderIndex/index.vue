<template lang="pug">
.fv-order-index
  v-row
    v-col(cols="12")
      fv-create-button.text-right(
        @button:click='createOrder'
      ) {{ $t('buttons.create.order') }}
  fv-order-list
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createOrder() {
      this.$router.push('/orders/new')
    }
  }
}
</script>
