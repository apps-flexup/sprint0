<template lang="pug">
.fv-rating
  v-rating(
    :value="rating"
    half-increments
    :dense="dense"
    :readonly="readonly"
    :size="size"
    :color="color"
    :background-color="color"
    @input="input"
  )
</template>

<script>
export default {
  name: 'FvRating',
  props: {
    rating: {
      type: Number,
      default() {
        return 0
      },
    },
    readonly: {
      type: Boolean,
      default() {
        return false
      },
    },
    dense: {
      type: Boolean,
      default() {
        return false
      },
    },
    size: {
      type: Number,
      default() {
        return 16
      },
    },
    color: {
      type: String,
      default() {
        return 'primary'
      },
    },
  },
  methods: {
    input(v) {
      this.$emit('input', v)
    },
  },
}
</script>
