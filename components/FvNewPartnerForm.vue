<template lang="pug">
  .fv-new-partner-form
    v-row
      v-col.md-12.sm-12.lg-12.xl-12(cols='12')
        v-text-field(
          v-model="values.name"
          :label="$t('forms.partners.new.name')"
          outlined=''
        )
    v-row
      v-col.md-12.sm-12.lg-12.xl-12(cols='12')
        v-textarea(
          v-model="values.address"
          :label="$t('forms.partners.new.address')"
          rows='3'
          outlined=''
        )
    v-row
      v-col.md-2.sm-3.lg-2.xl-2(cols='2')
        v-text-field(
          v-model="values.zip"
          :label="$t('forms.partners.new.zip')"
          outlined=''
      )
      v-col.md-6.sm-6.lg-7.xl-6(cols='6')
        v-text-field(
          v-model="values.city"
          :label="$t('forms.partners.new.city')"
          outlined=''
        )
      v-col.md-4.sm-3.lg-3.xl-4(cols='4')
        v-text-field(
          v-model="values.country"
          :label="$t('forms.partners.new.country')"
          outlined=''
        )
    v-row
      v-col.md-6.sm-6.lg-6.xl-6(cols='6')
        v-text-field(
          v-model="values.juridicalStatus"
          :label="$t('forms.partners.new.juridicalStatus')"
          outlined=''
        )
      v-col.md-6.sm-6.lg-6.xl-6(cols='6')
        v-text-field(
          v-model="values.siret"
          :label="$t('forms.partners.new.siret')"
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
