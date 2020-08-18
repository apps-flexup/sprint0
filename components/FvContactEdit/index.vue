<template lang="pug">
.fv-contact-edit
  v-form
    v-row
      v-col(cols="6")
        v-text-field(
          v-model="name"
          outlined=''
        )
      v-col(cols="6")
        v-select(
          v-model="juridicalStatus"
          outlined=''
        )
    v-row
      v-col(cols="6")
        v-text-field(
          v-model="address"
          outlined=''
        )
      v-col(cols="6")
        v-text-field(
          v-model="complément"
          outlined=''
        )
    v-row
      v-col(cols="6")
        v-text-field(
          v-model="zip"
          outlined=''
        )
      v-col(cols="6")
        v-text-field(
          v-model="city"
          outlined=''
        )
    v-row
      v-col(cols="6")
        fv-country-list
</template>
<script>
export default {
  name: 'FvContactEdit',
  computed: {
    machin() {
      return 42
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style scoped>
.fv-contact-edit {
  background-color: inherit;
}
</style>
