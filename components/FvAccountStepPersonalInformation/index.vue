<template lang="pug">
.fv-account-step-personal-information
  v-row
    v-col(cols='10')
      fv-text-field(
        data-testid='nameField'
        :value="name"
        :label="$t('forms.accounts.new.name')"
        @input="nameChanged"
      )
  v-row
    v-col(cols="6")
      fv-text-field(
        data-testid='lastnameField'
        :value="lastname"
        :label="$t('forms.accounts.new.lastname')"
        @input="lastnameChanged"
      )
    v-col(cols="6")
      fv-text-field(
        data-testid='firstnameField'
        :value="firstname"
        :label="$t('forms.accounts.new.firstname')"
        @input="firstnameChanged"
      )
</template>

<script>
export default {
  name: 'FvAccountStepPersonalInformation',
  props: {
    payload: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    name() {
      const res = this.payload ? this.payload.name : null
      return res
    },
    lastname() {
      const res = this.payload ? this.payload.lastname : null
      return res
    },
    firstname() {
      const res = this.payload ? this.payload.firstname : null
      return res
    }
  },
  data() {
    return {
      titles_trad: ['mr', 'ms', 'miss']
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    nameChanged(name) {
      const payload = {
        name
      }
      this.$emit('payload:changed', payload)
    },
    lastnameChanged(lastname) {
      const payload = {
        lastname
      }
      this.$emit('payload:changed', payload)
    },
    firstnameChanged(firstname) {
      const payload = {
        firstname
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
