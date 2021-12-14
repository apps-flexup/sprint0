<template lang="pug">
.fv-create-button
  fv-primary-button(
    data-testid="button"
    @button:click='clicked'
  )
    fv-icon(
    :icon="icon"
    color="#ffffff"
    )
    | {{ titleButton }}
</template>

<script>
export default {
  name: 'FvCreateButton',
  props: {
    icon: {
      type: String,
      default() {
        return null
      }
    },
    titleButton: {
      type: String,
      default() {
        return null
      }
    }
  },
  methods: {
    clicked() {
      this.$emit('button:click')
    }
  }
}
</script>

<style scoped>
.fv-icon {
  position: relative;
  right: 5%;
}
</style>
