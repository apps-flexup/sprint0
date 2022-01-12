import { configureReduxStore, ReduxStore } from '~/src/flexup/store/configureStore'
import { Order, OrderStatus } from '~/src/flexup/corelogic/usecases/my-orders-listing/order.interface'
import {
  getMyOrdersVM,
  OrderVM
} from '~/src/flexup/adapters/primary/view-models-generator/my-orders-screen/myOrdersViewModelGenerator'
import { ThirdParty } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/thirdParty.interface'

describe('My orders view model generation', () => {
  let store: ReduxStore

  beforeEach(() => {
    store = configureReduxStore({})
  })

  it('should view my orders', () => {
    const domaineParvis: ThirdParty = { id: 1, name: 'Domaine Parvis' }
    const cosys: ThirdParty = { id: 2, name: 'Cosys' }
    store.dispatch({
      type: 'MY_THIRD_PARTIES_LISTED',
      payload: {
        thirdParties: [domaineParvis, cosys]
      }
    })
    const order1: Order = {
      id: 'abc',
      thirdPartyId: 1,
      date: '2022-01-03',
      label: 'Order 1',
      status: OrderStatus.DRAFT,
      orderItems: []
    }
    const order2: Order = {
      id: 'def',
      thirdPartyId: 2,
      date: '2022-01-02',
      label: 'Order 2',
      status: OrderStatus.DRAFT,
      orderItems: []
    }
    store.dispatch({
      type: 'MY_ORDERS_LISTED',
      payload: {
        orders: [order1, order2]
      }
    })
    const expectedOrder1: OrderVM = {
      id: 'abc',
      thirdParty: 'Domaine Parvis',
      date: '2022-01-03',
      label: 'Order 1'
    }
    const expectedOrder2: OrderVM = {
      id: 'def',
      thirdParty: 'Cosys',
      date: '2022-01-02',
      label: 'Order 2'
    }
    expect(getMyOrdersVM(store.getState())).toEqual({
      orders: [expectedOrder1, expectedOrder2]
    })
  })
})
