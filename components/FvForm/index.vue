<template lang="pug">
.fv-form
  v-row.head
    fv-icon.mr-11(
    v-if="!isModal"
      data-testid="icon"
      color="inherit"
      size="xLarge"
      icon="mdi-chevron-left"
      @icon:clicked="cancel"
    )
    h1(data-testid="pageTitle" v-if="!isModal") {{ $t('forms.' + form + '.' + localAction + '.title') }}
    v-spacer
    fv-icon(
      v-if="readonly && allowEdit"
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
        v-row
          v-col(:cols="field.size" v-for="(field, i) in fieldsForStep(step)" :key="i")
            component(
              data-testid="fieldComponent"
              :is="field.component"
              :label="$t(`forms.${form}.new.${field.attribute}`)"
              :value="fieldValue(field)"
              :search="localPayload"
              :isNewObject="isNewObject"
              @value:changed="payloadChanged(field.additionalOutputs, field.attribute, ...arguments)"
              @payload:changed="payloadChanged(field.additionalOutputs, field.attribute, ...arguments)"
            )
  div.btn.mt-10(v-if="!readonly")
    fv-secondary-button(
      data-testid="cancelBtn"
      @button:click="cancel"
    ) {{ $t('forms.products.new.cancel') }}
    fv-primary-button(
      data-testid="submitBtn"
      :disabled="!isValid"
      @button:click="submit"
    ) {{ $t('forms.products.new.validate') }}
</template>

<script>
import { formComputeFunction } from '~/plugins/utils'

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
    },
    isModal: {
      type: Boolean,
      default() {
        return false
      }
    },
    allowEdit: {
      type: Boolean,
      default() {
        return true
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
      return this.$store.getters['forms/' + this.form]
    },
    readonly() {
      return this.localAction === 'read'
    },
    isInitiallyReadonly() {
      return this.action === 'edit' || this.action === 'new'
    },
    isNewObject() {
      return this.action === 'new'
    },
    isValid() {
      // const requiredValidatedFields = ['name', 'unit', 'price', 'vat']
      // requiredValidatedFields.forEach((field) => {
      //  if(Object.prototype.hasOwnProperty.call(this.localPayload, field)) {
      //  }
      // })
      return true
    }
  },
  watch: {
    payload() {
      this.localPayload = this.payload
    }
  },
  mounted() {
    this.$store.dispatch('forms/getBusinessAccount')
    this.$store.dispatch('forms/getSubAccount')
    this.$store.dispatch('forms/getPersonalAccount')
    this.$store.dispatch('forms/getProduct')
    this.$store.dispatch('forms/getThirdPartyAccount')
    this.$store.dispatch('forms/getPaymentCondition')
    this.$store.dispatch('forms/getPaymentStructure')
    this.$store.dispatch('members/get')
  },
  methods: {
    submit() {
      this.$nuxt.$loading.start()
      if (!this.localPayload.visibility) {
        this.localPayload.visibility = 'private'
      }
      this.$emit('form:submit', this.localPayload)
      if (!this.isModal) this.$router.push('/' + this.url, () => {})
      this.$nuxt.$loading.finish()
    },
    cancel() {
      if (this.isModal) {
        this.$emit('cancel:modal')
      } else if (this.localAction === 'read' || this.isInitiallyReadonly) {
        this.$router.go(-1)
      } else {
        this.localAction = 'read'
      }
    },
    payloadChanged(additionalOutputs, attribute, value) {
      if (additionalOutputs) {
        additionalOutputs.push(attribute)
        additionalOutputs.forEach((output) => {
          if (value[output]) this.$set(this.localPayload, output, value[output])
        })
      } else {
        this.$set(this.localPayload, attribute, value)
      }
    },
    editClicked() {
      this.localAction = 'edit'
    },
    hasRightToEdit(attribute) {
      let hasRight = true
      if (this.action !== 'new') {
        if (attribute === 'owners') {
          hasRight = this.$rights.canEditOwners()
        }
      }
      return hasRight && !this.readonly
    },
    fieldsForStep(step) {
      if (!step.fields) return []
      const fields = step.fields.map((field) => ({ ...field }))
      fields.forEach((field) => {
        if (!this.hasRightToEdit(field.attribute) || field.computeFunction) {
          field.component = field['readonly-component'] || 'fv-readonly-field'
        }
      })
      return fields
    },
    fieldValue(field) {
      if (field.computeFunction) {
        return formComputeFunction[field.computeFunction](this.localPayload)
      }
      if (field.input) return this.localPayload[field.input]
      if (!this.localPayload) return null
      return this.localPayload[`${field.attribute}`]
    }
  }
}
</script>

<style lang="scss" scoped>
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
.fv-status-select {
  display: flex;
}
.btn {
  display: flex;
  justify-content: space-between;
}
.head {
  align-items: center;
}
.fv-form {
  width: 70%;
  margin: auto;
}
</style>
