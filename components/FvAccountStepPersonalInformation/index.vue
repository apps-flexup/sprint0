<template lang="pug">
.fv-account-step-personal-information
  v-row
    v-col(cols="2")
      v-select(
        data-testid='titleField'
        outlined
        :items="titles"
        :value="title"
        :label="$t('forms.accounts.new.civility')"
        @input="civilityChanged"
      )
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
  v-row
    v-col(cols="6")
      fv-text-field(
        data-testid='emailField'
        :value="email"
        :label="$t('forms.accounts.new.email')"
        @input="emailChanged"
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
    title() {
      const res = this.payload ? this.payload.title : null
      return res
    },
    lastname() {
      const res = this.payload ? this.payload.lastname : null
      return res
    },
    firstname() {
      const res = this.payload ? this.payload.firstname : null
      return res
    },
    email() {
      const res = this.payload ? this.payload.email : null
      return res
    },
    titles() {
      const res = [
        'forms.accounts.new.titles.mr',
        'forms.accounts.new.titles.ms',
        'forms.accounts.new.titles.miss'
      ]
      return res.map((v) => {
        return this.$t(v)
      })
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    civilityChanged(title) {
      const payload = {
        title
      }
      this.$emit('payload:changed', payload)
    },
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
    },
    emailChanged(email) {
      const payload = {
        email
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
