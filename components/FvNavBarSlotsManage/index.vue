<template lang="pug">
.fv-nav-bar-slots-manage
  div
    a(href="") {{$t('navBar.manage.dashboard')}}
    a(href="") {{$t('navBar.manage.currentManagement')}}
    a(href="") {{$t('navBar.manage.FlexUpGestion')}}
</template>

<script>
export default {
  name: 'FvNavBarSlotsManage',
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
