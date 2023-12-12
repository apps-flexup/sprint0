import { OrderGateway } from '~/src/flexup/corelogic/gateways/orderGateway.interface'
import { Order } from '~/src/flexup/corelogic/entities/orders/order'
import { OrderItem } from '~/src/flexup/corelogic/entities/orders/orderItem'

export class JsonServerOrderGateway implements OrderGateway {
  private activeAccountId: number = -1
  private axios: any = undefined
  private resource: string = 'orders'

  setAxios(axios: any): void {
    this.axios = axios
  }

  setActiveAccountId(activeAccountId): void {
    this.activeAccountId = activeAccountId
  }

  async listMyOrders(): Promise<Order[]> {
    console.log(
      `► src/flexup/adapters/secondary/JsonServerOrderGateway.ts - listMyOrders: this.resource: ${this.resource}`
    )
    const orders = await this.axios.$get(`/${this.resource}?account_id=${this.activeAccountId}`)
    const res = orders.map((o) => {
      const orderItems = o.orderItems.map((oi) => {
        return new OrderItem(oi.productName, oi.offerName, oi.price, oi.vat, oi.unit, oi.quantity)
      })
      return new Order(o.id, o.thirdPartyId, o.date, o.label, orderItems, o.status)
    })
    return Promise.resolve(Object.assign([], res))
  }

  createOrder(order: Order): Promise<void> {
    const payload = {
      ...order,
      account_id: this.activeAccountId
    }
    this.axios.$post(`/${this.resource}`, payload)
    return Promise.resolve()
  }
}
