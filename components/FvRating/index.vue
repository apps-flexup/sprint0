<template lang="pug">
.fv-rating
  v-rating(
    :value="rating"
    half-increments
    :dense="dense"
    :readonly="readonly"
    :size="size"
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
      }
    },
    readonly: {
      type: Boolean,
      default() {
        return false
      }
    },
    dense: {
      type: Boolean,
      default() {
        return false
      }
    },
    size: {
      type: Number,
      default() {
        return 16
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
