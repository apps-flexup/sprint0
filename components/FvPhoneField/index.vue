<template lang="pug">
.fv-phone-field
  fv-media-field(
    data-testid="phoneField"
    :mediaValue="phone"
    :mediaLabel="phoneLabel"
    :labelValue="labelValue"
    @media:value:changed="phoneChanged"
    @media:label:changed="labelChanged"
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
      valueType: 'phone',
      phoneLabel: this.$t('mediaField.phoneLabel')
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    phoneChanged(v) {
      const payload = {
        value_type: this.valueType,
        value: v
      }
      this.$emit('phone:value:changed', payload)
    },
    labelChanged(v) {
      const payload = {
        value_type: this.valueType,
        label: v
      }
      this.$emit('phone:label:changed', payload)
    }
  }
}
</script>

<style scoped>
.right {
  margin-left: 15px;
}
</style>
