import { OrderGateway } from '~/src/flexup/corelogic/gateways/orderGateway.interface'
import { Order } from '~/src/flexup/corelogic/usecases/my-orders-listing/order.interface'

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
    const orders = await this.axios.$get(
      `/${this.resource}?account_id=${this.activeAccountId}`
    )
    return Promise.resolve(JSON.parse(JSON.stringify(orders)))
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
