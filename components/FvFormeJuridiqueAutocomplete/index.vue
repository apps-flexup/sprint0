<template lang="pug">
  .fv-formejuridique-autocomplete
    fv-autocomplete(
      :items="items"
      :filter="filter"
      @autocomplete:selected="selected"
    )
      template(v-slot:label)
        p {{ $t('forms.partners.new.juridicalStatus') }}
      template(v-slot:item="data")
        v-list-item-content
          v-list-item-title {{ `${data.item.name} (${data.item.sigle})` }}
      template(v-slot:selection="data")
        div {{ `${data.item.name} (${data.item.sigle})` }}

</template>

<script>
import { filterFormeJuridiqueAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvFormeJuridiqueAutocomplete',
  computed: {
    items() {
      const res = this.$store.getters['contracts/formesJuridiques']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('contracts/getFormesJuridiques')
  },
  methods: {
    selected(v) {
      this.$emit('formejuridiques:selected', v)
    },
    filter(item, v, it) {
      console.log('ok 1')
      return filterFormeJuridiqueAutocomplete(item, v, it)
    }
  }
}
</script>
