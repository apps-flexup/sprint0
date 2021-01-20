<template lang="pug">
.fv-nav-bar-slots-right
  component(
      :is="'fv-nav-bar-' + space"
      :space="space"
    )
      template(slot='button')
        v-btn()
          | button
</template>

<script>
export default {
  name: 'FvNavBarSlotsright',
  props: {
    space: {
      type: String,
      default() {
        return null
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped></style>
