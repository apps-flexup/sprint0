import { ThunkResult } from '../../../../store/configureStore'
import { Actions } from '../../my-orders-listing/actionCreators'
import { OrderGateway } from '~/src/flexup/corelogic/gateways/orderGateway.interface'
import { Order } from '~/src/flexup/corelogic/entities/orders/order'

export const createPurchase: (purchase: Order) => ThunkResult<Promise<void>> = (
  purchase
) => {
  return async (
    dispatch,
    _getState,
    { orderGateway }: { orderGateway: OrderGateway }
  ) => {
    await orderGateway.createOrder(purchase)
    dispatch(Actions.purchaseCreated(purchase))
  }
}
