<template lang="pug">
.fv-nav-bar-manage
  slot(name='gestion')
  slot(name='button')
</template>

<script>
export default {
  name: 'FvNavBarManage',
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

<style scoped>
a {
  padding: 20px;
}
</style>
