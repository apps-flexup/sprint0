import { OrderItem } from '~/src/flexup/corelogic/entities/orders/orderItem'

export enum OrderStatus {
  NEW = 'NEW',
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  CHANGEREQUESTED = 'CHANGEREQUESTED',
  ONHOLD = 'ONHOLD',
  REJECTED = 'REJECTED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  ARCHIVED = 'ARCHIVED'
}

export class Order {
  id: string
  thirdPartyId: number
  date: string
  label?: string
  orderItems: Array<OrderItem>
  status: OrderStatus

  constructor(
    id: string,
    thirdPartyId: number = -1,
    date: string = '',
    label: string = '',
    orderItem: Array<OrderItem> = [],
    status: OrderStatus = OrderStatus.NEW
  ) {
    this.id = id
    this.thirdPartyId = thirdPartyId
    this.date = date
    this.label = label
    this.orderItems = orderItem
    this.status = status
  }

  get totalWithoutTax(): number {
    let res = 0
    this.orderItems.forEach((oi) => {
      res += oi.valueWithoutTax
    })
    return res
  }

  get totalWithTax(): number {
    let res = 0
    this.orderItems.forEach((oi) => {
      res += oi.valueWithTax
    })
    return res
  }

  get totalsByVat(): Object {
    const totalsByVat = {}
    this.orderItems!.forEach((orderItem) => {
      const price = orderItem.valueWithoutTax
      const key: string = (orderItem.vat * 100).toString()
      if (!Object.prototype.hasOwnProperty.call(totalsByVat, key)) {
        totalsByVat[key] = { total: 0, vatTotal: 0 }
      }
      totalsByVat[key].total += price
      totalsByVat[key].vatTotal += price * orderItem.vat
    })
    return totalsByVat
  }

  addOrderItem(orderItem: OrderItem) {
    this.orderItems.push(orderItem)
  }

  removeOrderItem(index: number) {
    this.orderItems.splice(index, 1)
  }

  orderItemQuantityChanged(quantity, index) {
    this.orderItems[index].quantity = quantity
  }
}
