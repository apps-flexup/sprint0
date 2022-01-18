import {
  configureReduxStore,
  ReduxStore
} from '~/src/flexup/store/configureStore'
import { InMemoryOrderGateway } from '~/src/flexup/adapters/secondary/inMemoryOrderGateway'
import { listMyOrders } from '~/src/flexup/corelogic/usecases/my-orders-listing/listMyOrders'
import {
  Order,
  OrderStatus
} from '~/src/flexup/corelogic/entities/orders/order'

describe('Listing of my orders', () => {
  let store: ReduxStore
  let orderGateway: InMemoryOrderGateway

  beforeEach(() => {
    orderGateway = new InMemoryOrderGateway()
    store = configureReduxStore({ orderGateway })
  })

  describe('No orders', () => {
    it('should not list any order when there is no order', async () => {
      await listOrders()
      expectListedOrders()
    })
  })

  describe('Some orders', () => {
    const order: Order = new Order(
      'abc',
      1,
      '2022-01-03',
      'Super order',
      [],
      OrderStatus.DRAFT
    )

    it('should list all of them', async () => {
      givenSomeAvailableOrders(order)
      await listOrders()
      expectListedOrders(order)
    })
  })

  const givenSomeAvailableOrders = (...orders: Order[]) => {
    orderGateway.feedWith(...orders)
  }

  const listOrders = () => {
    store.dispatch(listMyOrders)
  }

  const expectListedOrders = (...listedOrders: Order[]) => {
    expect(store.getState().coreLogic.ordersList.data).toEqual(listedOrders)
  }
})
