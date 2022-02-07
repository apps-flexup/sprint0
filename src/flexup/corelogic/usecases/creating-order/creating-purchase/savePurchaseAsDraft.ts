import { ThunkResult } from '~/src/flexup/store/configureStore'
import { OrderGateway } from '~/src/flexup/corelogic/gateways/orderGateway.interface'
import { Actions } from '~/src/flexup/corelogic/usecases/my-orders-listing/actionCreators'
import { Order, OrderStatus } from '~/src/flexup/corelogic/entities/orders/order'

export const savePurchaseAsDraft: (purchase: Order) => ThunkResult<Promise<void>> = (purchase) => {
  return async (dispatch, _getState, { orderGateway }: { orderGateway: OrderGateway }) => {
    purchase.status = OrderStatus.DRAFT
    await orderGateway.createOrder(purchase)
    dispatch(Actions.purchaseCreated(purchase))
  }
}
