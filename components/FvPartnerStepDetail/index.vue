<template lang="pug">
  .fv-partner-step-detail
    v-row
      v-col(cols="6")
        v-text-field(
          label="$t('model.partner.name')"
          outlined=''
          clearable=''
        )
      v-col(cols="6")
        v-select(
          :items="$store.getters['formesJuridiques']"
          item-value="id"
          item-text="name"
          outlined=''
          clearable=''
        )
    v-row
      v-col(cols="6")
        v-text-field(
          label="$t('model.partner.address')"
          outlined=''
          clearable=''
        )
      v-col(cols="6")
        v-text-field(
          label="$t('model.partner.addressmore')"
          outlined=''
          clearable=''
        )
    v-row
      v-col(cols="6")
        v-text-field(
          label="$t('model.partner.zip')"
          outlined=''
          clearable=''
        )
      v-col(cols="6")
        v-text-field(
          label="$t('model.partner.city')"
          outlined=''
          clearable=''
        )
</template>

<script>
export default {
  name: 'FvPartnerStepDetail',
  computed: {
    formesJuridiques() {
      const res = this.$store.getters['formesJuridiques']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
