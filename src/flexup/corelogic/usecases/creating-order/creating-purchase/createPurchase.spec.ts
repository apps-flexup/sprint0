import { getMyOrders } from '~/src/flexup/store/reducers/ordersList.reducer'
import { configureReduxStore, ReduxStore } from '~/src/flexup/store/configureStore'
import { Order, OrderStatus } from '~/src/flexup/corelogic/usecases/my-orders-listing/order.interface'
import { createPurchase } from '~/src/flexup/corelogic/usecases/creating-order/creating-purchase/createPurchase'
import { InMemoryOrderGateway } from '~/src/flexup/adapters/secondary/inMemoryOrderGateway'

describe('Creating a purchase', () => {
  let store: ReduxStore
  let orderGateway: InMemoryOrderGateway

  beforeEach(() => {
    orderGateway = new InMemoryOrderGateway()
    store = configureReduxStore({ orderGateway })
  })
  it('should add a first purchase to the list of orders', async () => {
    const order: Order = {
      id: 'abc',
      thirdPartyId: 1,
      date: '2022-01-04',
      label: 'First purchase',
      status: OrderStatus.NEW,
      orderItems: []
    }
    await store.dispatch(createPurchase(order))
    expect(getMyOrders(store.getState()).data).toEqual([order])
  })
})
