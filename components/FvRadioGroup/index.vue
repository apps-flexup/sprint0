<template lang="pug">
.fv-radio-group
  h1.mb-8(data-testid="pageTitle") {{ title }}
  v-radio-group(:label="label" v-model="model" :mandatory="true")
    v-radio(
      v-for="option in availableOptions" :key="option.value"
      :name="option.name"
      :label="option.label"
      :value="option.value"
    )
    fv-flex-items
      template(v-slot:left)
        fv-secondary-button(
          data-testid="cancelBtn"
          @button:click="cancel"
        ) {{ $t('buttons.previous') }}
      template(v-slot:separator)
        v-spacer
      template(v-slot:right)
        fv-primary-button(
          @button:click="validate()"
        ) {{ $t('buttons.next') }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return 'Title'
      },
    },
    label: {
      type: String,
      default() {
        return 'Label'
      },
    },
    availableOptions: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      model: null,
    }
  },
  methods: {
    validate() {
      this.$emit('radio-group:validated', this.model)
    },
    cancel() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
::v-deep .v-input--radio-group--column .v-input--radio-group__input > .v-label {
  font-size: 22px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 12px;
}
::v-deep .v-label {
  color: #000000;
  margin: 12px 0;
}
::v-deep .v-radio {
  margin-left: 20px;
}
.fv-flex-items {
  margin-top: 25px;
  width: 50%;
}
</style>
