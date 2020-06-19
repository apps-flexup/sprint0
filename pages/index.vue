<template lang="pug">
  v-layout(column='' justify-center='' align-center='')
    v-row
      v-col(cols="6")
        v-btn(color='primary' nuxt='' to='/contracts/new')
          | {{ $t('menus.contractnew') }}
      v-col(cols="6")
        v-btn(color='primary' nuxt='' to='/partners/new')
          | {{ $t('menus.partnernew') }}
</template>

<script>
export default {
  auth: false
}
</script>
