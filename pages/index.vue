<template lang="pug">
  v-layout(column='' justify-center='' align-center='')
    v-row
      v-col(cols="6")
        v-btn(color='primary' nuxt='' to='/partners/new')
          | Nouveau partenaire
      v-col(cols="6")
        v-btn(color='primary' nuxt='' to='/orders/new')
          | Nouveau Devis
    v-row
      v-col(cols="12")
        fv-frequence
</template>

<script>
export default {
  auth: false
}
</script>
