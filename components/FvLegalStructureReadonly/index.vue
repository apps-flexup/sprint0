<template lang="pug">
.fv-legal-structure-readonly
  fv-readonly-field(
    data-testid="autocomplete"
    :label="label"
    :value="legalStructureName"
  )
</template>

<script>
export default {
  name: 'FvLegalStructureReadonly',
  props: {
    value: {
      type: Number,
      default() {
        return null
      }
    },
    label: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    legalStructureName() {
      const legalStructure = this.$store.getters[
        'contracts/getLegalStructureById'
      ](this.value)
      if (!legalStructure) return null
      const res = legalStructure.name
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('contracts/getLegalStructures')
  }
}
</script>
