<template lang="pug">
.fv-payment-condition-risk
  v-row(class="justify-center align-center" :style="cssVars")
    v-col(cols="10")
    v-col.center(cols="1")
      span.total {{ $t('forms.paymentConditions.new.total') }}
    v-col.center(cols="1")
      v-chip.total(
        data-testid="total"
        :color="avatarColor"
      ) {{ total }}%
</template>

<script>
export default {
  name: 'FvPaymentConditionRisk',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    total() {
      console.log('coucou le total change')
      let res = 0
      const references = JSON.parse(JSON.stringify(this.value))
      if (!references) return res
      for (const reference of Object.values(references)) {
        if (res === 0) {
          res = reference.value
        } else {
          res *= reference.value / 100
        }
      }
      res = Math.round(res * 10) / 10
      console.log(' nouveau total: ', res)
      this.$emit('payload:changed', res)
      return res
    },
    avatarColor() {
      const settings = this.$store.getters['settings/settings']
      const theme = settings.theme
      let res = 'white'
      if (theme === 'dark') res = '#4a4b4e'
      return res
    },
    cssVars() {
      const settings = this.$store.getters['settings/settings']
      const theme = settings.theme
      let color = 'black'
      if (theme === 'dark') color = 'white'
      const res = {
        '--fontColor': color
      }
      return res
    }
  },
  watch: {
    deep: true,
    handler() {
      console.log('value changed: ', this.value)
    }
  },
  mounted() {
    console.log('value init with: ', this.value)
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getSettings')
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}
.total {
  font-weight: bold;
  color: var(--fontColor);
  font-size: 1rem;
}
</style>
