<template lang="pug">
  .fv-new-partner-form
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.name"
          :label="$t('forms.partners.new.name')"
          outlined=''
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.juridicalStatus"
          :label="$t('forms.partners.new.juridicalStatus')"
          outlined=''
        )
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.siret"
          :label="$t('forms.partners.new.siret')"
          outlined=''
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.address"
          :label="$t('forms.partners.new.address')"
          outlined=''
        )
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.complement"
          :label="$t('forms.partners.new.complement')"
          outlined=''
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.zip"
          :label="$t('forms.partners.new.zip')"
          outlined=''
        )
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.city"
          :label="$t('forms.partners.new.city')"
          outlined=''
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.country"
          :label="$t('forms.partners.new.country')"
          outlined=''
        )
</template>

<script>
export default {
  name: 'FvNewProductForm',
  props: {
    values: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    machin() {
      return 42
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-new-partner-form {
  background-color: inherit;
}
</style>
