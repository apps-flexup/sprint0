<template lang="pug">
.fv-edit-action
  v-icon.mr-2(small='' @click="clicked")
    | mdi-pencil
</template>

<script>
export default {
  name: 'FvEditAction',
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    clicked() {
      this.$emit('edit:clicked')
    }
  }
}
</script>
