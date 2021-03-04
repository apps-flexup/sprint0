<template lang="pug">
.fv-structure-autocomplete
  fv-autocomplete(
    v-model="structure"
    :items="items"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('forms.orders.new.structure') }}
    template(v-slot:item="data")
        v-list-item-content
          div {{ data.item.label }}
    template(v-slot:selection="data")
        v-list-item-content
          div {{ data.item.label }}
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
      const res = this.$store.getters['paymentStructures/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('paymentStructures/get')
  },
  methods: {
    selected(v) {
      this.$emit('structures:selected', v)
    }
  }
}
</script>
