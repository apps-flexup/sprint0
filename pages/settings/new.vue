<template lang="pug">
.page-settings-new
  v-card(
    max-width="800px"
    justify-center
  )
    v-card-title {{ $t('settings.title') }}
    v-card-text
      fv-settings-default
    v-card-actions
      v-spacer
      v-btn(@click.stop="submit" block='') {{ $t('buttons.submit') }}
</template>

<script>
export default {
  methods: {
    submit() {
      this.$router.push('/products/new')
    },
  },
}
</script>
