<template lang="pug">
.fv-step-form
  v-list
    v-list-group(
      :value='true'
    )
      template(v-slot:activator)
        a.mr-3.number {{ formId }}
        p.mr-2.titleForm {{ title }}
      div.mt-5.form
        slot(name="form")
</template>

<script>
import '@/style/step_form_style.css'

export default {
  name: 'FvStepForm',
  props: {
    formId: {
      type: Number,
      default() {
        return 1
      }
    },
    title: {
      type: String,
      default() {
        return 'Informations Générales'
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
  padding: 0 8px;
  border-radius: 50px;
  font-size: 18px;
  color: initial;
}
.form >>> .background {
  background-color: rgba(225, 226, 230, 0.29);
  padding: 15px 30px;
  border-radius: 12px;
}
.v-list {
  margin: 0 20vw;
}
</style>
