<template functional lang="pug">
  v-list-item(
    v-bind="attrs"
    v-on="on"
  )
    v-list-item-avatar
      v-img(:src="props.partner.avatar")
    v-list-item-content
      div {{ props.partner.name }}
</template>

<script>
export default {
  name: 'FvPartnerItem',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
