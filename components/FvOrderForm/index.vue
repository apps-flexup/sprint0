<template lang="pug">
  .fv-order-form
    p {{ $options.name }}
    fv-order-for-partner
    v-row
      v-col(cols="6")
        pre Ici le total de tous les partneraires
</template>

<script>
export default {
  name: 'FvOrderForm',
  props: {
    orderList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    orderDetail() {
      const res = []
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
