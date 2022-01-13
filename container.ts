import { DateProvider } from './src/flexup/corelogic/usecases/creating-order/DateProvider'
import {
  configureReduxStore,
  ReduxStore
} from '~/src/flexup/store/configureStore'
import { InMemoryOrderGateway } from '~/src/flexup/adapters/secondary/inMemoryOrderGateway'
import { JsonServerOrderGateway } from '~/src/flexup/adapters/secondary/JsonServerOrderGateway'
import { InMemoryThirdPartyGateway } from '~/src/flexup/adapters/secondary/inMemoryThirdPartyGateway'
import { RealDateProvider } from '~/src/flexup/adapters/secondary/RealDateProvider'
import {
  OrderItem,
  OrderStatus
} from '~/src/flexup/corelogic/usecases/my-orders-listing/order.interface'

export const dateProvider: DateProvider = new RealDateProvider()

const thirdPartyGateway = new InMemoryThirdPartyGateway()
thirdPartyGateway.feedWith(
  { id: 1, name: 'Domaine Parvis' },
  { id: 2, name: 'Cosys' }
)

const socks: OrderItem = {
  productName: 'Socks',
  offerName: 'Christmas Socks',
  price: { amount: 10, currency: 'EUR' },
  vat: 0.2,
  unit: 'unit',
  quantity: 2
}

const bag: OrderItem = {
  productName: 'Bag',
  offerName: '',
  price: { amount: 45, currency: 'EUR' },
  vat: 0.1,
  unit: 'unit',
  quantity: 1
}

const inMemoryOrderGateway = new InMemoryOrderGateway()
inMemoryOrderGateway.feedWith(
  {
    id: 'abc',
    thirdPartyId: 1,
    date: '2022-01-03',
    label: 'order 1',
    status: OrderStatus.DRAFT,
    orderItems: [socks, bag]
  },
  {
    id: 'def',
    thirdPartyId: 2,
    date: '2022-01-02',
    label: 'order 2',
    status: OrderStatus.DRAFT,
    orderItems: [socks]
  }
)

export const jsonServerOrderGateway = new JsonServerOrderGateway()

export const store: ReduxStore = configureReduxStore({
  orderGateway: jsonServerOrderGateway,
  thirdPartyGateway
})
