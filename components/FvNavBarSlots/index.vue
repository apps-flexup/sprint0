<template lang="pug">
.fv-nav-bar-slots
  slot(name="NavBarHeader")
    component(
      :is="'fv-nav-bar-slots-' + space"
      :space="space"
    )
</template>

<script>
export default {
  name: 'FvNavBarSlots',
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
