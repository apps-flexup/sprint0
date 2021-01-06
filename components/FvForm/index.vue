<template lang="pug">
.fv-form
  v-row.head
    fv-icon.mr-11(
      data-testid="icon"
      color="inherit"
      size="xLarge"
      icon="mdi-chevron-left"
      @icon:clicked="cancel"
    )
    h1(data-testid="pageTitle") {{ $t('forms.' + form + '.' + action + '.title') }}
  v-list.mt-10(
    data-testid="listProductStep"
    v-for="(step, index) in getFormStep"
    :key="index"
  )
    fv-step-form(
      data-testid="stepForm"
      :formId="index+1"
      :title="$t(step.title)"
    )
      template(slot="form")
        composant(
          data-testid="stepComponent"
          :is="step.component"
          :payload="payload"
          @payload:changed="payloadChanged"
        )
  div.btn.mt-10
    fv-secondary-button(
      data-testid="cancelBtn"
      @button:click="cancel"
    ) {{ $t('forms.products.new.cancel') }}
    fv-primary-button(
      data-testid="submitBtn"
      @button:click="submit"
    ) {{ $t('forms.products.new.validate') }}
</template>

<script>
export default {
  name: 'FvForm',
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      }
    },
    action: {
      type: String,
      default() {
        return null
      }
    },
    url: {
      type: String,
      default() {
        return null
      }
    },
    form: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    getFormStep() {
      const res = this.$store.getters['forms/' + this.form]
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('forms/getProduct')
    this.$store.dispatch('forms/getOffer')
  },
  methods: {
    submit() {
      this.$nuxt.$loading.start()
      this.$emit('form:submit', this.payload)
      this.$router.push('/' + this.url)
      this.$nuxt.$loading.finish()
    },
    cancel() {
      this.$router.push('/' + this.url)
      this.$emit('clicked')
    },
    payloadChanged(payload) {
      this.payload = payload
    }
  }
}
</script>

<style scoped>
::v-deep .v-sheet {
  border-radius: 15px;
}
::v-deep .v-list.mt-10.v-sheet.theme--light {
  background-color: rgb(241, 241, 241);
}
.btn {
  display: flex;
  justify-content: space-between;
}
.head {
  align-items: center;
}
</style>
