<template lang="pug">
  .partners-index
    v-row(align="center")
      v-spacer
      fv-modal-and-button(
        :buttonText="$t('buttons.create.partner')"
        :title="$t('forms.partner.new.title')"
        component="fv-new-partner-form"
        @close="close"
        @save="save"
      )
    fv-partner-list
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.partners-index {
  background-color: inherit;
}
</style>
