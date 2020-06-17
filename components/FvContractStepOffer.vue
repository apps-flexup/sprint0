<template lang="pug">
  .fv-contract-step3
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
          id: 1
        }
      }
    },
    values: {
      type: Object,
      default() {
        return {
          offers: []
        }
      }
    }
  },
  data() {
    return {
      local_selected: []
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/offers']
      return res
    },
    items() {
      const res = this.$store.getters['offers/all']
      return res
    },
    selected: {
      get() {
        return this.local_selected || this.values.offers || []
      },
      set(v) {
        console.log('set', v)
        this.local_selected = v
        const res = v.map((i) => i.id)
        this.$emit('wizard', { offers: res })
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOfferHeaders')
    this.$store.dispatch('offers/get')
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step3 {
  background-color: inherit;
}
</style>
