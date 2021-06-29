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
    h1(data-testid="pageTitle") {{ $t('forms.' + form + '.' + localAction + '.title') }}
    v-spacer
    fv-icon(
      v-if="readonly"
      data-testid="editBtn"
      icon="mdi-circle-edit-outline"
      size="xLarge"
      @icon:clicked="editClicked"
    )
  v-list.mt-10(
    data-testid="steps"
    v-for="(step, index) in formSteps"
    :key="index"
  )
    fv-step-form(
      data-testid="stepForm"
      :formId="index+1"
      :title="$t(step.title)"
    )
      template(slot="form")
        v-row(v-for="field in fieldsForStep(step)" :key="field.attribute")
          v-col(cols="field.size")
            component(
              data-testid="fieldComponent"
              :is="field.component"
              :label="$t(`forms.${form}.new.${field.attribute}`)"
              :value="payload[field.attribute]"
              :payload="payload[field.attribute]"
              @input="payloadChanged(field.attribute, ...arguments)"
              @payload:changed="payloadChanged(field.attribute, ...arguments)"
              @country:selected="payloadChanged(field.attribute, ...arguments)"
              @legalstructure:selected="payloadChanged(field.attribute, ...arguments)"
            )
  div.btn.mt-10(v-if="!readonly")
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
        return 'read'
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
      localPayload: this.payload,
      localAction: this.action || 'read'
    }
  },
  computed: {
    formSteps() {
      const res = this.$store.getters['forms/' + this.form]
      return res
    },
    readonly() {
      const res = this.localAction === 'read'
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
    payloadChanged(attribute, value) {
      const payload = this.localPayload
      payload[attribute] = value
      this.localPayload = Object.assign({}, this.localPayload, payload)
    },
    editClicked() {
      this.localAction = 'edit'
    },
    hasRightToEdit() {
      const res = !this.readonly
      return res
    },
    fieldsForStep(step) {
      if (!step.fields) return []
      const fields = step.fields.map((field) => ({ ...field }))
      fields.forEach((field) => {
        if (!this.hasRightToEdit()) {
          field.component = field['readonly-component'] || 'fv-readonly-field'
        }
      })
      return fields
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
