import { OrderGateway } from '~/src/flexup/corelogic/gateways/orderGateway.interface'
import { Order } from '~/src/flexup/corelogic/usecases/my-orders-listing/order.interface'

export class InMemoryOrderGateway implements OrderGateway {
  private orders: Order[]

  constructor(orders: Order[] = []) {
    this.orders = orders
  }

  listMyOrders(): Promise<Order[]> {
    return Promise.resolve(this.orders)
  }

  feedWith(...orders: Order[]) {
    this.orders = orders
  }

  createOrder(order: Order): Promise<void> {
    this.orders.push(order)
    return Promise.resolve()
  }
}
