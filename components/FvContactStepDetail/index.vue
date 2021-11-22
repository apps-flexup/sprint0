<template lang="pug">
.fv-contact-step-detail
  v-row
    v-col(cols="6")
      v-text-field(
        label="$t('model.contact.name')"
        outlined=''
      )
    v-col(cols="6")
      v-select(
        :items="$store.getters['legalStructure']"
        item-value="id"
        item-text="libelle"
        outlined=''
      )
  v-row
    v-col(cols="6")
      v-text-field(
        label="$t('model.contact.address')"
        outlined=''
      )
    v-col(cols="6")
      v-text-field(
        label="$t('model.contact.addressmore')"
        outlined=''
      )
  v-row
    v-col(cols="6")
      v-text-field(
        label="$t('model.contact.zip')"
        outlined=''
      )
    v-col(cols="6")
      v-text-field(
        label="$t('model.contact.city')"
        outlined=''
      )
</template>

<script>
export default {
  name: 'FvContactStepDetail',
  computed: {
    legalStructure() {
      const res = this.$store.getters['contracts/legalStructures']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
