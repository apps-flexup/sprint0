<template lang="pug">
  .fv-structure-autocomplete
    fv-autocomplete(
      v-model="this.structure"
      :items="items"
      @autocomplete:selected="selected"
    )
      template(v-slot:label)
        div {{ $t('forms.orders.new.structure') }}
      template(v-slot:item="data")
        template(v-if="typeof data.item !== 'object'")
          v-list-item-content(v-text="data.item")
        template(v-else='')
          v-list-item-content
            div {{ data.item.name }}
      template(v-slot:selection="data")
          v-list-item-content
            div {{ data.item.name }}
      template(v-slot:no-data)
        div Aucune donnée disponible
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
    this.$store.dispatch('contracts/getStructures')
  },
  methods: {
    selected(v) {
      this.$emit('structures:selected', v)
    }
  }
}
</script>
