import { ThunkResult } from '~/src/flexup/store/configureStore'
import { OrderGateway } from '~/src/flexup/corelogic/gateways/orderGateway.interface'
import { Actions } from '~/src/flexup/corelogic/usecases/my-orders-listing/actionCreators'

export const listMyOrders: ThunkResult<Promise<void>> = async (
  dispatch,
  _getState,
  { orderGateway }: { orderGateway: OrderGateway }
) => {
  const orders = await orderGateway.listMyOrders()
  dispatch(Actions.myOrdersListed(orders))
}
