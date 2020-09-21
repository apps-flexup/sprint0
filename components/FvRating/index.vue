<template lang="pug">
.fv-rating
  v-rating(
    :value="rating"
    half-increments
    :dense="dense"
    :readonly="readonly"
    size="16"
    @input="input"
  )
</template>

<script>
export default {
  name: 'FvReview',
  props: {
    rating: {
      type: Number,
      default() {
        return 0
      }
    },
    readonly: {
      type: Boolean,
      default() {
        return true
      }
    },
    dense: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    input(v) {
      this.$emit('input', v)
    }
  }
}
</script>
