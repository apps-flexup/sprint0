<template lang="pug">
.fv-nav-bar-buyer
  slot(name='search')
  slot(name='icon')
</template>

<script>
export default {
  name: 'FvNavBarBuyer',
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
