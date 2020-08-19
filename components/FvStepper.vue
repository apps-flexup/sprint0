<template lang="pug">
.fv-stepper
  v-card.my-3(
    v-for="(etape, index) in steps" :key="index"
    max-width='400'
  )
    v-list-item(two-line='')
      v-list-item-content
        v-list-item-title.subtitle-1 {{ etape.id }}- {{ $t(etape.name) }}
    v-list-item(
      v-if="active(etape.id)"
    )
      v-list-item-title.overline
        component(:is="step.resume")
</template>

<script>
export default {
  name: 'FvStepper',
  props: {
    current: {
      type: Number,
      required: true
    },
    steps: {
      type: Array,
      required: true
    }
  },
  computed: {
    step() {
      const indice = parseInt(this.current)
      const res = this.steps.find((v) => {
        return parseInt(v.id) === indice
      })
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    moveTo(etape) {
      console.log('changement de langue', etape)
    },
    active(v) {
      const res = parseInt(this.current) > parseInt(v)
      return res
    }
  }
}
</script>
<style scoped>
.fv-stepper {
  background-color: inherit;
  .active {
    border-left: 5px solid green;
  }
}
</style>
