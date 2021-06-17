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
    v-for="(step, index) in formSteps"
    :key="index"
  )
    fv-step-form(
      data-testid="stepForm"
      :formId="index+1"
      :title="$t(step.title)"
    )
      template(slot="form")
        component(
          data-testid="stepComponent"
          :is="step.component"
          :payload="localPayload"
          :readonly="readonly"
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
  data() {
    return {
      localPayload: this.payload
    }
  },
  computed: {
    formSteps() {
      const res = this.$store.getters['forms/' + this.form]
      return res
    },
    readonly() {
      const res = this.action === 'read'
      return res
    }
  },
  watch: {
    payload: {
      deep: true,
      handler() {
        this.localPayload = Object.assign({}, this.localPayload, this.payload)
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('forms/getBusinessAccount')
    this.$store.dispatch('forms/getPersonalAccount')
    this.$store.dispatch('forms/getProduct')
    this.$store.dispatch('forms/getOffer')
    this.$store.dispatch('forms/getThirdPartyAccount')
    this.$store.dispatch('forms/getPaymentCondition')
    this.$store.dispatch('forms/getPaymentStructure')
  },
  methods: {
    submit() {
      this.$nuxt.$loading.start()
      this.$emit('form:submit', this.localPayload)
      this.$router.push('/' + this.url, () => {})
      this.$nuxt.$loading.finish()
    },
    cancel() {
      this.$router.go(-1)
      this.$emit('clicked')
    },
    payloadChanged(payload) {
      this.localPayload = Object.assign({}, this.localPayload, payload)
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
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
  margin-bottom: initial;
}
::v-deep .v-text-field__details {
  display: none;
}
.btn {
  display: flex;
  justify-content: space-between;
}
.head {
  align-items: center;
}
</style>
