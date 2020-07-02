<template lang="pug">
  .fv-structure-autocomplete
    p {{ $options.name }}
    fv-auto-complete(
      v-model="this.structure"
      :items="items"
      :label="$t('forms.orders.new.structure')"
      @autocomplete:selected="selected"
    )
</template>

<script>
export default {
  name: 'FvStructureAutocomplete',
  props: {
    structure: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['contracts/structures']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      this.$emit('structures:selected', v)
    }
  }
}
</script>
