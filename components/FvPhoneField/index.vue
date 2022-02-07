<template lang="pug">
.fv-phone-field
  fv-media-field(
    data-testid="phoneField"
    :mediaValue="phone"
    :mediaLabel="phoneLabel"
    :labelValue="labelValue"
    @media:value:changed="phoneChanged"
    @media:label:changed="labelChanged"
    @media:delete:clicked="deleteClicked"
  )
</template>

<script>
export default {
  name: 'FvPhoneField',
  props: {
    phone: {
      type: [Number, String],
      default() {
        return null
      },
    },
    labelValue: {
      type: String,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      valueType: 'Phone',
      phoneLabel: this.$t('mediaField.phone.placeholder'),
    }
  },
  methods: {
    phoneChanged(v) {
      const payload = {
        value_type: this.valueType,
        value: v,
      }
      this.$emit('phone:value:changed', payload)
    },
    labelChanged(v) {
      const payload = {
        value_type: this.valueType,
        label: v,
      }
      this.$emit('phone:label:changed', payload)
    },
    deleteClicked() {
      this.$emit('phone:delete:clicked')
    },
  },
}
</script>

<style scoped>
.right {
  margin-left: 15px;
}
</style>
