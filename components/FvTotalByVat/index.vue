<template lang="pug">
  .fv-total-by-vat
    v-row
      v-col(cols="6")
        pre ici les totaux
        v-row(
          v-for="(v, k) in totals" :key="k"
        )
          v-col(cols="6")
            pre Key: {{ k }}, Value: {{ v }}
</template>

<script>
export default {
  name: 'FvTotalByVat',
  props: {
    orderLines: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    totals() {
      const res = this.orderLines.reduce((acc, orderLine) => {
        if (!acc[orderLine.vat]) {
          acc[orderLine.vat] = 0
        }
        acc[orderLine.vat] += orderLine.price * orderLine.quantity
        return acc
      }, {})
      return res
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  }
}
</script>
