import { configureReduxStore, ReduxStore } from '~/src/flexup/store/configureStore'
import { InMemoryOrderGateway } from '~/src/flexup/adapters/secondary/inMemoryOrderGateway'
import { getMyOrders } from '~/src/flexup/store/reducers/ordersList.reducer'
import { savePurchaseAsDraft } from '~/src/flexup/corelogic/usecases/creating-order/creating-purchase/savePurchaseAsDraft'
import { Order, OrderStatus } from '~/src/flexup/corelogic/entities/orders/order'
import { OrderItem } from '~/src/flexup/corelogic/entities/orders/orderItem'

describe('Saving purchase as draft', () => {
  let store: ReduxStore
  let orderGateway: InMemoryOrderGateway

  beforeEach(() => {
    orderGateway = new InMemoryOrderGateway()
    store = configureReduxStore({ orderGateway })
  })

  it('should save the purchase as draft', async () => {
    const socks = new OrderItem('Socks', 'Christmas socks', { amount: 10, currency: 'EUR' }, 0.2, 'unit', 2)
    const bag = new OrderItem('Bag', '', { amount: 45, currency: 'EUR' }, 0.2, 'unit', 1)
    const order: Order = new Order('abc', 1, '2022-01-04', 'First purchase', [socks, bag], OrderStatus.NEW)
    await store.dispatch(savePurchaseAsDraft(order))
    const expectedOrder = {
      ...order,
      status: OrderStatus.DRAFT
    }
    expect(getMyOrders(store.getState()).data).toEqual([expectedOrder])
  })
})
