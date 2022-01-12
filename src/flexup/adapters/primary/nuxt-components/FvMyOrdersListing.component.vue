<template lang="pug">
.fv-my-orders-listing
  h1 coucou
  pre my orders: {{ orders }}
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
      orders: []
    }
  },
  mounted() {
    store.dispatch(listMyThirdParties)
    store.dispatch(listMyOrders).then(() => {
      this.orders = getMyOrdersVM(store.getState())
    })
  }
}
</script>
