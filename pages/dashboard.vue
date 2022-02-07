<template lang="pug">
  .fv-dashboard
    v-row
      v-col(cols="9")
        fv-user-info
      v-col(cols="3")
        pre dev {{ $auth.hasScope('dev') }}
    v-row
      v-col(cols="3")
        v-card
          v-card-title
            h1.subtitle titre
          v-card-subtitle
            h2.title sous-titre
          v-card-actions
            v-btn(
              @click.stop="buttonClick"
              color="primary"
              full-width
            ) Go
          v-card-text
            ul
              li attribut commercial 1
              li attribut commercial 1
              li attribut commercial 1
              li attribut commercial 1
              li attribut commercial 1
              li attribut commercial 1
              li attribut commercial 1
              li attribut commercial 1
          v-card-actions
            v-btn(
              @click.stop="buttonClick"
              color="primary"
            ) Go
      v-col(cols="3")
        pre ici le bloc 2
      v-col(cols="3")
        pre ici le bloc 3
      v-col(cols="3")
        pre ici le bloc 4
    v-row
      v-col(cols="3")
        v-card(
          color: green
         )
          v-card-title
            h6 orders recieved
          v-card-text
            v-icon mdi-plus
      v-col(cols="3")
        pre ici le bloc 2
      v-col(cols="3")
        pre ici le bloc 3
      v-col(cols="3")
        pre ici le bloc 4
</template>
<script>
export default {
  methods: {
    buttonClick() {
      console.log('coucou')
    },
  },
}
</script>

<style scoped>
.fv-dashboard {
  background-color: inherit;
}
</style>
