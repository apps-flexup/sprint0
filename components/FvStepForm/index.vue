<template lang="pug">
.fv-step-form
  v-list
    v-list-group(
      :value='true'
    )
      template(v-slot:activator)
        a.mr-3.number {{ formId }}
        p.mr-2.titleForm {{ title }}
      div.form
        fv-product-form
</template>

<script>
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
        return 'Informations Générale'
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
  font-size: 24px;
  color: black;
}
.number {
  border: black solid 1px;
  padding: 0 8px;
  border-radius: 50px;
  color: black;
  font-size: 18px;
}
.form >>> .v-list {
  background-color: rgba(225, 226, 230, 0.29);
  margin: 0 20vw;
  padding: 20px 30px;
  border-radius: 12px;
}
</style>
