<template lang="pug">
.fv-mail-field
  fv-media-field(
    data-testid="mailField"
    :mediaValue="mail"
    :mediaLabel="mailLabel"
    :labelValue="labelValue"
    @media:value:changed="mailChanged"
    @media:label:changed="labelChanged"
    @media:delete:clicked="deleteClicked"
  )
</template>

<script>
export default {
  name: 'FvMailField',
  props: {
    mail: {
      type: String,
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
      valueType: 'Mail',
      mailLabel: this.$t('mediaField.mail.placeholder'),
    }
  },
  methods: {
    mailChanged(v) {
      const payload = {
        value_type: this.valueType,
        value: v,
      }
      this.$emit('mail:value:changed', payload)
    },
    labelChanged(v) {
      const payload = {
        value_type: this.valueType,
        label: v,
      }
      this.$emit('mail:label:changed', payload)
    },
    deleteClicked() {
      this.$emit('mail:delete:clicked')
    },
  },
}
</script>

<style scoped>
.right {
  margin-left: 15px;
}
</style>
