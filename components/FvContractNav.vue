<template lang="pug">
  .fv-contract-nav
    p {{ $options.name }}
    v-row
      v-col(cols="12")
        v-btn(v-if="showPrevious" @click="previous") Previous
        v-spacer
        v-btn(v-if="showNext"  @click="next") Next
    v-row
      v-col(cols="4") {{ first}}
      v-col(cols="4") {{ current }}
      v-col(cols="4") {{ last }}
</template>

<script>
export default {
  name: 'FvContractNav',
  props: {
    first: {
      type: Number,
      default() {
        return 1
      }
    },
    current: {
      type: Number,
      default() {
        return 1
      }
    },
    last: {
      type: Number,
      default() {
        return 1
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-nav {
  background-color: inherit;
}
</style>
