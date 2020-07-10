<template lang="pug">
  .fv-partner-list
    v-row
      v-col(cols="12")
        v-data-table.elevation-2(
          :headers='headers'
          :items='items'
          item-key='id'
          @click:row='selected'
        )
          template(v-slot:item.actions='{ item }')
            v-icon.mr-2(small='' @click.stop='showContract(item)')
              | mdi-briefcase
            v-icon.mr-2(small='' @click.stop='selected(item)')
              | mdi-pencil
            v-icon(small='' @click.stop='deleteItem(item)')
              | mdi-delete
</template>

<script>
export default {
  name: 'FvPartnerList',
  computed: {
    headers() {
      const res = this.$store.getters['headers/partners']
      res.push({ text: 'headers.actions', value: 'actions', sortable: false })
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$activeAccount.partners()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getPartnerHeaders')
  },
  methods: {
    showContract(v) {
      const res = v.account_id
      this.$router.push(`/partners/contracts/${res}`)
    },
    selected(v) {
      this.$emit('list:selected', v)
    },
    deleteItem(v) {
      console.log('delete :', v)
      this.$store.dispatch('partners/remove', v)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-data-table {
  .v-data-table__wrapper {
    table {
      tbody {
        tr:hover {
          background-color: darkgray;
        }
      }
    }
  }
}
</style>
