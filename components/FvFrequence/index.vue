<template lang="pug">
  .fv-frequence
    p {{ $options.name }}
    p periode : {{ periode }}
    v-select(
      v-model="periode"
      :items="periodes"
      item-value="offset"
    )
      template(v-slot:label)
        span Période
      template(v-slot:item="{ item }")
        div(v-to-locale="item.text")
      template(v-slot:selection="{ item }")
        div(v-to-locale="item.text")
</template>

<script>
export default {
  name: 'FvFrequence',
  data() {
    return {
      periode: {},
      periodes: [
        {
          text: 'frequences.periods.day',
          offset: 'days'
        },
        {
          text: 'frequences.periods.week',
          offset: 'weeks'
        },
        {
          text: 'frequences.periods.month',
          offset: 'months'
        },
        {
          text: 'frequences.periods.quarter',
          offset: 'quarters'
        },
        {
          text: 'frequences.periods.year',
          offset: 'years'
        },
        {
          text: 'frequences.periods.day',
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
<style lang="scss" scoped>
.fv-frequence {
  background-color: inherit;
}
</style>
