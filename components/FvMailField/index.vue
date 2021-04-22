<template lang="pug">
.fv-mail-field
  fv-media-field(
    data-testid="mailField"
    :mediaValue="mail"
    :mediaLabel="mailLabel"
    :labelValue="labelValue"
    @media:value:changed="mailChanged"
    @media:label:changed="labelChanged"
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
      }
    },
    labelValue: {
      type: String,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      valueType: 'mail',
      mailLabel: this.$t('mediaField.mailLabel')
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    mailChanged(v) {
      const payload = {
        value_type: this.valueType,
        value: v
      }
      this.$emit('mail:value:changed', payload)
    },
    labelChanged(v) {
      const payload = {
        value_type: this.valueType,
        label: v
      }
      this.$emit('mail:label:changed', payload)
    }
  }
}
</script>

<style scoped>
.right {
  margin-left: 15px;
}
</style>
