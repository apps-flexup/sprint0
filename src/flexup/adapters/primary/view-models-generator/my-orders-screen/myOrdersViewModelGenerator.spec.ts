import { configureReduxStore, ReduxStore } from '~/src/flexup/store/configureStore'
import {
  getMyOrdersVM,
  OrderVM,
} from '~/src/flexup/adapters/primary/view-models-generator/my-orders-screen/myOrdersViewModelGenerator'
import { ThirdParty } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/thirdParty.interface'
import { OrderItem } from '~/src/flexup/corelogic/entities/orders/orderItem'
import { Order, OrderStatus } from '~/src/flexup/corelogic/entities/orders/order'

describe('My orders view model generation', () => {
  let store: ReduxStore

  beforeEach(() => {
    store = configureReduxStore({})
  })

  it('should have default headers', () => {
    expect(getMyOrdersVM(store.getState()).headers).toEqual([
      {
        align: 'left',
        sortable: true,
        text: 'headers.orders.thirdParty',
        value: 'thirdParty',
        order: 0,
        customizable: true,
        active: true,
        displayed: true,
      },
      {
        align: 'left',
        sortable: true,
        text: 'headers.orders.date',
        value: 'date',
        order: 0,
        customizable: true,
        active: true,
        displayed: true,
      },
      {
        align: 'right',
        sortable: true,
        text: 'headers.orders.value',
        value: 'value',
        order: 0,
        customizable: true,
        active: true,
        displayed: true,
      },
      {
        align: 'center',
        sortable: true,
        text: 'headers.orders.status',
        value: 'status',
        order: 0,
        customizable: true,
        active: true,
        displayed: true,
      },
    ])
  })
  it('should view my orders', () => {
    const domaineParvis: ThirdParty = { id: 1, name: 'Domaine Parvis' }
    const cosys: ThirdParty = { id: 2, name: 'Cosys' }
    store.dispatch({
      type: 'MY_THIRD_PARTIES_LISTED',
      payload: {
        thirdParties: [domaineParvis, cosys],
      },
    })
    const socks: OrderItem = new OrderItem('Socks', 'Christmas socks', { amount: 10, currency: 'EUR' }, 0.1, 'unit', 2)
    const bag: OrderItem = new OrderItem('Bag', '', { amount: 45, currency: 'EUR' }, 0.2, 'unit', 1)
    const order1: Order = new Order('abc', 1, '2022-01-03', 'Order 1', [socks, bag], OrderStatus.DRAFT)
    const order2: Order = new Order('def', 2, '2022-01-02', 'Order 2', [bag], OrderStatus.DRAFT)
    store.dispatch({
      type: 'MY_ORDERS_LISTED',
      payload: {
        orders: [order1, order2],
      },
    })
    const expectedOrder1: OrderVM = {
      id: 'abc',
      thirdParty: 'Domaine Parvis',
      date: '2022-01-03',
      label: 'Order 1',
      value: { amount: 76, currency: 'EUR' },
    }
    const expectedOrder2: OrderVM = {
      id: 'def',
      thirdParty: 'Cosys',
      date: '2022-01-02',
      label: 'Order 2',
      value: { amount: 54, currency: 'EUR' },
    }
    expect(getMyOrdersVM(store.getState()).orders).toEqual([expectedOrder1, expectedOrder2])
  })
})
