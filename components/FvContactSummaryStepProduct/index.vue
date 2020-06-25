<template lang="pug">
  .fv-contact-stepProduct(v-if="etape.id === 2")
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
  name: 'FvContactStepProduct',
  props: {
    etape: {
      type: Object,
      default() {
        return 2
      }
    }
  },
  data() {
    return {
      selected: []
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/products']
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$store.getters['products/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contact-stepProduct {
  background-color: inherit;
}
</style>
