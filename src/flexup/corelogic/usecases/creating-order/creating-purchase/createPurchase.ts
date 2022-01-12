import { ThunkResult } from '../../../../store/configureStore'
import { Actions } from '../../my-orders-listing/actionCreators'
import { Order } from '~/src/flexup/corelogic/usecases/my-orders-listing/order.interface'
import { OrderGateway } from '~/src/flexup/corelogic/gateways/orderGateway.interface'

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
