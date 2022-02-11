<template lang="pug">
  .contract-index
    fv-contract-list
    v-btn(color='primary' nuxt='' to='/contracts/new') {{ $t('buttons.create.contract') }}
</template>

<style scoped>
.contract-index {
  background-color: inherit;
}
</style>
