<template lang="pug">
  .fv-contact-step-detail
    v-row
      v-col(cols="6")
        v-text-field(
          label="$t('model.contact.name')"
          outlined=''
          clearable=''
        )
      v-col(cols="6")
        v-select(
          :items="$store.getters['formesJuridiques']"
          item-value="id"
          item-text="libelle"
          outlined=''
          clearable=''
        )
    v-row
      v-col(cols="6")
        v-text-field(
          label="$t('model.contact.address')"
          outlined=''
          clearable=''
        )
      v-col(cols="6")
        v-text-field(
          label="$t('model.contact.addressmore')"
          outlined=''
          clearable=''
        )
    v-row
      v-col(cols="6")
        v-text-field(
          label="$t('model.contact.zip')"
          outlined=''
          clearable=''
        )
      v-col(cols="6")
        v-text-field(
          label="$t('model.contact.city')"
          outlined=''
          clearable=''
        )
</template>

<script>
export default {
  name: 'FvContactStepDetail',
  computed: {
    formesJuridiques() {
      const res = this.$store.getters['contracts/formesJuridiques']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
