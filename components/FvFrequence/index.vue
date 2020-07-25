<template lang="pug">
  .fv-frequence
    p {{ $options.name }}
    p(v-if="periode") periode : {{ $t(`frequences.periods.${periode}`) }}
    v-select(
      v-model="periode"
      :items="periodes"
      item-value="offset"
      clearable=''
      outlined=''
    )
      template(v-slot:label)
        div Période
      template(v-slot:item="{ item }")
        div {{ $t(item.text) }}
      template(v-slot:selection="{ item }")
        div {{ $t(item.text) }}
</template>

<script>
export default {
  name: 'FvFrequence',
  data() {
    return {
      periode: null,
      periodes: [
        {
          text: 'frequences.periods.days',
          offset: 'days'
        },
        {
          text: 'frequences.periods.weeks',
          offset: 'weeks'
        },
        {
          text: 'frequences.periods.months',
          offset: 'months'
        },
        {
          text: 'frequences.periods.quarters',
          offset: 'quarters'
        },
        {
          text: 'frequences.periods.years',
          offset: 'years'
        },
        {
          text: 'frequences.periods.days',
          offset: 'days'
        }
      ]
    }
  },
  computed: {
    machin() {
      return 42
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style scoped>
.fv-frequence {
  background-color: inherit;
}
</style>
