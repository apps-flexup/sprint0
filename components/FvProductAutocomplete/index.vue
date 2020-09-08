<template lang="pug">
.fv-product-autocomplete
  p {{ $options.name }}
  fv-autocomplete(
    :element="product"
    :items="items"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('forms.orders.new.product') }}
    template(v-slot:item="data")
      template(v-if="typeof data.item !== 'object'")
        v-list-item-content(v-text="data.item")
      template(v-else='')
        v-list-item-avatar
          v-img(:src="data.item.avatar")
        v-list-item-content
          div {{ data.item.name }}
    template(v-slot:selection="data")
        v-list-item-avatar
          v-img(:src="data.item.avatar")
        v-list-item-content
          div {{ data.item.name }}
    template(v-slot:no-data)
      div Aucune donnée disponible
</template>

<script>
export default {
  name: 'FvProductAutocomplete',
  props: {
    product: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$activeAccount.products()
      return res
    }
  },
  mounted() {
    this.$store.dispatch('products/get')
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      this.$emit('products:selected', v)
    }
  }
}
</script>
