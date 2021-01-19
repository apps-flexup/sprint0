<template lang="pug">
.fv-nav-bar-slots-left
  component(
      :is="'fv-nav-bar-' + space"
      :space="space"
    )
      template(slot='gestion')
        a(href="") {{$t('navBar.'+space+'.dashboard')}}
        a(href="") {{$t('navBar.'+space+'.currentManagement')}}
        a(href="") {{$t('navBar.'+space+'.FlexUpGestion')}}
</template>

<script>
export default {
  name: 'FvNavBarSlotsLeft',
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
