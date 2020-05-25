<template lang="pug">
  .fv-contract-nav
    p {{ $options.name }}
    v-row
        v-col(cols="4")
          v-btn(v-if="previous" @click="showPrevious") Previous {{ previous }}
        v-col(cols="4")
          v-spacer
        v-col(cols="4")
          v-btn(v-if="next" @click="showNext") Next {{ next }}
    v-row
      v-col(cols="4") {{ first }}
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
  data() {
    return {
      next: 2,
      previous: 0
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    showPrevious() {
      this.previous--
      this.next--
      console.log('Coucou previous', this.previous)
    },
    showNext() {
      this.previous++
      this.next++
      console.log('Coucou next', this.next)
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-nav {
  background-color: inherit;
}
</style>
