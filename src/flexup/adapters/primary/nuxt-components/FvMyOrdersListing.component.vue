<template lang="pug">
.fv-my-orders-listing
  fv-index-table(
    :searchLabel="$t('table.orders.search')"
    tableComponent='fv-order-data-table'
    tableName='orders'
    :rules='rules'
    :defaultHeaders='headers'
    :defaultItems='orders'
  )

</template>
<script>
import { listMyOrders } from '~/src/flexup/corelogic/usecases/my-orders-listing/listMyOrders'
import { listMyThirdParties } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/listMyThirdParties'
import { getMyOrdersVM } from '~/src/flexup/adapters/primary/view-models-generator/my-orders-screen/myOrdersViewModelGenerator'
import { store } from '~/container'

export default {
  name: 'FvMyOrdersListing',
  data() {
    return {
      headers: [],
      orders: [],
      rules: {}
    }
  },
  async mounted() {
    await store.dispatch(listMyThirdParties)
    await store.dispatch(listMyOrders)
    this.headers = getMyOrdersVM(store.getState()).headers
    this.orders = await Promise.all(
      getMyOrdersVM(store.getState()).orders.map(async (o) => {
        const thirdParty = await this.$directory.getAccountById(o.thirdParty)
        return {
          ...o,
          thirdParty: !+o.thirdParty ? o.thirdParty : thirdParty.name
        }
      })
    )
  }
}
</script>
