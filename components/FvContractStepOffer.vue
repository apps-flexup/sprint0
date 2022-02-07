<template lang="pug">
.fv-contract-step-product
  v-row
    v-col(cols="12") {{ values.contractType }}
  v-row
    v-col(cols="12")
      v-data-table.elevation-2(
        v-model="selected"
        :headers="headers"
        :items="items"
        item-key="id"
        show-select
      )
</template>
<script>
export default {
  name: 'FvContractStep3',
  props: {
    etape: {
      type: Object,
      default() {
        return {
          id: 1,
        }
      },
    },
    values: {
      type: Object,
      default() {
        return {
          products: [],
          contractType: null,
        }
      },
    },
  },
  data() {
    return {
      local_selected: [],
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/offers']
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$store.getters['products/all']
      const id = parseInt(this.values.contractType)
      const filteredRes = res.filter((v) => parseInt(v.contractType) === id)
      return filteredRes
    },
    selected: {
      get() {
        return this.local_selected || this.values.products || []
      },
      set(v) {
        this.local_selected = v
        const res = v.map((i) => i.id)
        this.$emit('wizard', { products: res })
      },
    },
  },
  mounted() {
    this.$store.dispatch('headers/getProductHeaders')
  },
}
</script>
