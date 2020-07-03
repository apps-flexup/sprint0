<template lang="pug">
  .fv-formejuridique-autocomplete
    fv-auto-complete(
      v-model="formejuridique"
      :items="items"
      :label="$t('forms.partners.new.juridicalStatus')"
      @autocomplete:selected="selected"
    )
</template>

<script>
export default {
  name: 'FvFormeJuridiqueAutocomplete',
  props: {
    formejuridique: {
      type: Number,
      default() {
        return null
      }
    }
  },
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
    }
  }
}
</script>
