<template lang="pug">
.fv-header-index
  v-row
    v-col(cols="6")
      h1(data-testid="title") {{ title }}
    v-col(cols="6")
      fv-primary-button.text-right(
        v-if="canCreate"
        data-testid="createButton"
        @button:click='clicked'
      )
        fv-icon(
          icon="mdi-plus"
          color="#ffffff"
        )
        | {{ titleButton }}
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

.fv-icon {
  position: relative;
  right: 5%;
}
</style>
