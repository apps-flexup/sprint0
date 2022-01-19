import { DateProvider } from './src/flexup/corelogic/usecases/creating-order/DateProvider'
import {
  configureReduxStore,
  ReduxStore
} from '~/src/flexup/store/configureStore'
import { InMemoryOrderGateway } from '~/src/flexup/adapters/secondary/inMemoryOrderGateway'
import { JsonServerOrderGateway } from '~/src/flexup/adapters/secondary/JsonServerOrderGateway'
import { InMemoryThirdPartyGateway } from '~/src/flexup/adapters/secondary/inMemoryThirdPartyGateway'
import { RealDateProvider } from '~/src/flexup/adapters/secondary/RealDateProvider'
import { OrderItem } from '~/src/flexup/corelogic/entities/orders/orderItem'
import { Order, OrderStatus } from '~/src/flexup/corelogic/entities/orders/order'

export const dateProvider: DateProvider = new RealDateProvider()

const thirdPartyGateway = new InMemoryThirdPartyGateway()
// thirdPartyGateway.feedWith(
//   { id: 1, name: 'Domaine Parvis' },
//   { id: 2, name: 'Cosys' }
// )

const socks: OrderItem = new OrderItem(
  'Socks',
  'Christmas Socks',
  { amount: 10, currency: 'EUR' },
  0.2,
  'unit',
  2
)

const bag: OrderItem = new OrderItem(
  'Bag',
  '',
  { amount: 45, currency: 'EUR' },
  0.1,
  'unit',
  1
)

const inMemoryOrderGateway = new InMemoryOrderGateway()
inMemoryOrderGateway.feedWith(
  new Order('abc', 1, '2022-01-03', 'order 1', [socks, bag], OrderStatus.DRAFT),
  new Order('def', 2, '2022-01-02', 'order 2', [socks], OrderStatus.DRAFT)
)

export const jsonServerOrderGateway = new JsonServerOrderGateway()

export const store: ReduxStore = configureReduxStore({
  orderGateway: jsonServerOrderGateway,
  thirdPartyGateway
})
