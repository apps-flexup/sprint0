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
      v-col(cols="10")
        fv-partner-autocomplete(:partner="partnerId")
      v-col(cols="2") {{ partnerId }}
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      partnerId: null
    }
  }
}
</script>
