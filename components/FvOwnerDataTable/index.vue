<template lang="pug">
.fv-owner-data-table
  fv-data-table(
    data-testid="fvDataTable"
    :headers="headers"
    :items="items"
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
  )
    template(v-slot:item.to_id="{ item }")
      div(:key="forceReRender") {{ accountNames[item.to_id] }}
    template(v-slot:item.actions="{ item }")
      fv-delete-action(@delete:clicked="deleteItem(item)")

</template>

<script>
export default {
  name: 'FvOwnerDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      }
    },
    headers: {
      type: Array,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      forceReRender: 0,
      accountNames: {}
    }
  },
  watch: {
    items() {
      if (this.items) {
        this.items.forEach((owner) => {
          this.addOwnerName(owner)
        })
      }
    }
  },
  mounted() {
    this.$store.dispatch('owners/get')
    if (this.items) {
      this.items.forEach((owner) => {
        this.addOwnerName(owner)
      })
    }
  },
  methods: {
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    },
    addOwnerName(owner) {
      this.$displayRules.ownerName(owner).then((name) => {
        this.accountNames[owner.to_id] = name
        this.uglyForceReRender()
      })
    },
    uglyForceReRender() {
      this.forceReRender++
    },
    deleteItem(owner) {
      this.$emit('dataTable:delete:owner', owner)
    }
  }
}
</script>
