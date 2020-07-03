<template lang="pug">
  .fv-category-autocomplete
    p {{ $options.name }}
    fv-auto-complete(
      v-model="this.category"
      :items="items"
      :label="$t('forms.orders.new.category')"
      @autocomplete:selected="selected"
    )
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
  },
  methods: {
    selected(v) {
      this.$emit('category:selected', v)
    }
  }
}
</script>
