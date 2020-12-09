<template lang="pug">
.fv-step-form
    v-list-group(
      :value='true'
    )
      template(v-slot:activator)
        p(data-testid='formId').mr-3.number {{ formId }}
        p(data-testid='formTitle').mr-2.titleForm {{ title }}
        v-spacer
      div(data-testid='formSlot').mt-5.form
        slot(name="form")
</template>

<script>
export default {
  name: 'FvStepForm',
  props: {
    formId: {
      type: Number,
      default() {
        return null
      }
    },
    title: {
      type: String,
      default() {
        return null
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.titleForm {
  margin: 0;
  padding: 0;
  font-size: 26px;
  font-weight: 500;
}
.number {
  border: solid 1px;
  padding: 0 8.5px;
  border-radius: 50px;
  font-size: 19px;
  margin-bottom: initial;
}
.form >>> .v-card {
  background-color: rgba(225, 226, 230, 0.29);
  padding: 15px 30px;
  border-radius: 12px;
}
.v-list-group {
  margin: 1vh 3vw;
}
::v-deep .v-list-item__icon > .v-icon {
  font-size: 35px;
}
::v-deep .v-list-item {
  min-height: 30px;
}
</style>
