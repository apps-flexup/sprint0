<template lang="pug">
  .fv-message-data-table
    fv-data-table(
      :headers="headers"
      :items="items"
      @dataTable:sortBy="sortBy"
    )
      template(v-slot:item.from="{ item }")
        div {{ item.from }}
      template(v-slot:item.subject="{ item }")
        div {{ item.subject }}
      template(v-slot:item.description="{ item }")
        div {{ item.description }}
      template(v-slot:item.channel="{ item }")
        div {{ item.channel }}
      template(v-slot:item.status="{ item }")
        fv-status-readonly(
          :value="item.status.toLowerCase()"
        )
</template>

<script>
export default {
  name: 'FvMessageDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      },
    },
    headers: {
      type: Array,
      default() {
        return []
      },
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
    options: {
      type: Object,
      default() {
        return null
      },
    },
  },
  methods: {
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    },
  },
}
</script>

<style scoped>

</style>
