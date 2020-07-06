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
      v-col.md-4.sm-4.lg-4.xl-4(cols='4')
        v-text-field(
          v-model="values.zip"
          :label="$t('forms.partners.new.zip')"
          outlined=''
      )
      v-col.md-8.sm-8.lg-8.xl-8(cols='8')
        v-text-field(
          v-model="values.city"
          :label="$t('forms.partners.new.city')"
          outlined=''
        )
    v-row
      v-col.md-10.sm-10.lg-10.xl-10(cols='10')
        fv-country-autocomplete(
          v-model="values.country"
          :label="$t('forms.partners.new.country')"
          outlined=''
          @country:selected="countrySelected"
        )
    v-row
      v-col.md-12.sm-12.lg-12.xl-12(cols='12')
        fv-forme-juridique-autocomplete(
          v-model="values.juridicalStatus"
          :label="$t('forms.partners.new.juridicalStatus')"
          outlined=''
          @formejuridiques:selected="formejuridiquesSelected"
        )
    v-row
      v-col.md-12.sm-12.lg-12.xl-12(cols='12')
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
  },
  methods: {
    formejuridiquesSelected(v) {
      this.$emit('formeJuridiques:autocomplete', v)
      this.values.juridicalStatus = v
    },
    countrySelected(v) {
      this.values.country = v
      this.$emit('country:autocomplete', v)
    }
  }
}
</script>
