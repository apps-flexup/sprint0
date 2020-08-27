<template lang="pug">
.fv-icon
  v-icon(
    :color="color"
    :small="small"
    :x-small="xSmall"
    :large="large"
    :x-large="xLarge"
    @click="clicked"
  )
    | {{ icon }}
</template>

<script>
export default {
  name: 'FvIcon',
  props: {
    icon: {
      type: String,
      default() {
        return null
      }
    },
    color: {
      type: String,
      default() {
        return '#000000'
      }
    },
    size: {
      type: String,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      small: false,
      large: false,
      xSmall: false,
      xLarge: false
    }
  },
  watch: {
    size() {
      this.setSize()
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.setSize()
  },
  methods: {
    clicked() {
      this.$emit('icon:clicked')
    },
    setSize() {
      switch (this.size) {
        case 'xSmall':
          this.xLarge = false
          this.xSmall = true
          this.large = false
          this.small = false
          break
        case 'small':
          this.xLarge = false
          this.xSmall = false
          this.large = false
          this.small = true
          break
        case 'large':
          this.xLarge = false
          this.xSmall = false
          this.large = true
          this.small = false
          break
        case 'xLarge':
          this.xLarge = true
          this.xSmall = false
          this.large = false
          this.small = false
          break
        default:
          this.xLarge = false
          this.xSmall = false
          this.large = false
          this.small = false
      }
    }
  }
}
</script>
