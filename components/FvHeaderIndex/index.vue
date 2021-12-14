<template lang="pug">
.fv-header-index
  v-row
    v-col(cols="6")
      h1(data-testid="title") {{ title }}
    v-col(cols="6")
      fv-create-button.text-right(
        v-if="canCreate"
        data-testid="createButton"
        :icon="icon"
        :titleButton="titleButton"
        @button:click='clicked'
      )
</template>

<script>
export default {
  name: 'FvHeaderIndex',
  props: {
    title: {
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
    },
    canCreate: {
      type: Boolean,
      default() {
        return true
      }
    },
    icon: {
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
.row {
  align-items: center;
  margin-bottom: 25px;
}
</style>
