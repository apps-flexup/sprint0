<template lang="pug">
  .fv-partner-autocomplete
    p {{ $options.name }}
    fv-auto-complete(
      v-model="this.partner"
      :items="items"
      :label="$t('forms.orders.new.partner')"
      @autocomplete:selected="selected"
    )
</template>

<script>
export default {
  name: 'FvPartnerAutocomplete',
  props: {
    partner: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$activeAccount.partners()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      this.$emit('partners:selected', v)
    }
  }
}
</script>
