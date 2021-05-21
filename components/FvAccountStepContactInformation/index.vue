<template lang="pug">
.fv-account-step-contact-information
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
  name: 'FvAccountStepContactInformation',
  props: {
    payload: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    email() {
      const medias = this.payload ? this.payload.medias : null
      let res
      medias.forEach((media) => {
        if (media.description.type === 'Mail') {
          res = media.description.value
        }
      })
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    emailChanged(email) {
      const payload = {
        email
      }
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
