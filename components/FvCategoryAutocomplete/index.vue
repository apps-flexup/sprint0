<template lang="pug">
  .fv-category-autocomplete
    p {{ $options.name }}
    fv-auto-complete(
      v-model="this.category"
      :items="items"
      :label="$t('forms.orders.new.category')"
      @autocomplete:selected="selected"
    )
      template(v-slot:item="data")
        pre {{ JSON.stringify(data.item) }}
        pre plop
      template(v-slot:selection="data")
        p pouet
</template>

<script>
export default {
  name: 'FvCategoryAutocomplete',
  props: {
    category: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['categories/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('categories/get')
  },
  methods: {
    selected(v) {
      this.$emit('category:selected', v)
    }
  }
}
</script>
