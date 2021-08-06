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
      div(v-if="item" :key="forceReRender") {{ accountNames[item.to_id] }}
    template(v-slot:item.data="{ item }")
      fv-icon(
        :icon="iconForOwner(item)"
        @icon:clicked="referenceOwnerClicked(item)"
      )
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
      this.initItems()
    }
  },
  mounted() {
    this.$store.dispatch('owners/get')
    this.initItems()
  },
  methods: {
    initItems() {
      if (this.items) {
        this.items.forEach((owner) => {
          this.addOwnerName(owner)
        })
      }
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    },
    addOwnerName(owner) {
      if (!owner) return
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
    },
    iconForOwner(owner) {
      const isReferenceOwner = owner.data && owner.data.isReferenceOwner
      return isReferenceOwner ? 'mdi-star' : 'mdi-star-outline'
    },
    referenceOwnerClicked(owner) {
      this.$emit('dataTable:setReferenceOwner:owner', owner)
    }
  }
}
</script>
