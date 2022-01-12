import { configureReduxStore, ReduxStore } from '~/src/flexup/store/configureStore'
import { InMemoryOrderGateway } from '~/src/flexup/adapters/secondary/inMemoryOrderGateway'
import { Order, OrderStatus } from '~/src/flexup/corelogic/usecases/my-orders-listing/order.interface'
import { getMyOrders } from '~/src/flexup/store/reducers/ordersList.reducer'
import {
  savePurchaseAsDraft
} from '~/src/flexup/corelogic/usecases/creating-order/creating-purchase/savePurchaseAsDraft'

describe('Saving purchase as draft', () => {
  let store: ReduxStore
  let orderGateway: InMemoryOrderGateway

  beforeEach(() => {
    orderGateway = new InMemoryOrderGateway()
    store = configureReduxStore({ orderGateway })
  })

  it('should save the purchase as draft', async () => {
    const order: Order = {
      id: 'abc',
      thirdPartyId: 1,
      date: '2022-01-04',
      label: 'First purchase',
      status: OrderStatus.NEW,
      orderItems: [
        {
          productName: 'Socks',
          offerName: 'Christmas socks',
          price: { amount: 10, currency: 'EUR' },
          vat: 0.2,
          quantity: 2
        },
        {
          productName: 'Bag',
          offerName: '',
          price: { amount: 45, currency: 'EUR' },
          vat: 0.2,
          quantity: 1
        }
      ]
    }
    await store.dispatch(savePurchaseAsDraft(order))
    const expectedOrder = {
      ...order,
      status: OrderStatus.DRAFT
    }
    expect(getMyOrders(store.getState()).data).toEqual([expectedOrder])
  })
})
