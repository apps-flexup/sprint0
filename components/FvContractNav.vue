<template lang="pug">
  .fv-contract-nav
    v-row
      v-col(
        cols="2"
        align='left'
      )
        v-btn(
          :disabled='step === 1'
          text=''
          @click='step--'
        )
          | $('button.previous')
      v-col(
        cols="8"
        align='left'
      )
        fv-etape(:etape='step')
      v-col(
        cols="2"
        align='right'
      )
        v-btn(
          v-if="step <= nbSteps"
          :disabled='step === nbSteps'
          color='primary'
          depressed=''
          @click='step++'
        )
          | $('button.next')
        v-btn(
          v-else
          :disabled='step <= nbSteps'
          color='primary'
          depressed=''
          @click='submit'
        )
          | $('button.submit')
</template>

<script>
export default {
  name: 'FvContractNav',
  props: {
    current: {
      type: Number,
      default() {
        return 1
      }
    },
    steps: {
      type: Array,
      default() {
        return 1
      }
    }
  },
  computed: {
    step: {
      get() {
        return parseInt(this.current)
      },
      set(v) {
        this.$emit('moveTo', v)
      }
    },
    centerBloc() {
      const res = this.steps.find((e) => {
        return e.id === this.step
      })
      return res
    },
    nbSteps() {
      const res = this.steps.length
      console.table(res)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    moveTo(v) {
      console.log('changement :', v)
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-nav {
  background-color: inherit;
}
</style>
