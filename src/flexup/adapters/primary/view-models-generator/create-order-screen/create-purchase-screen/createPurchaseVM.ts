import {
  OrderItemVM
} from '~/src/flexup/adapters/primary/view-models-generator/create-order-screen/create-purchase-screen/orderItemVM'
import {
  CustomOrderItemVM
} from '~/src/flexup/adapters/primary/view-models-generator/create-order-screen/create-purchase-screen/customOrderItemVM'
import {
  OrderItem
} from '~/src/flexup/corelogic/entities/orders/orderItem'
import {
  CustomOrderItem
} from '~/src/flexup/corelogic/entities/orders/customOrderItem'
import {
  Order
} from '~/src/flexup/corelogic/entities/orders/order'

export class CreatePurchaseVM {
  private order: Order

  constructor(date: string) {
    this.order = new Order(-1, date, '', [])
  }

  get thirdPartyId(): number {
    return this.order.thirdPartyId
  }

  set thirdPartyId(thirdPartyId: number) {
    if (this.order.thirdPartyId !== thirdPartyId) {
      this.order.thirdPartyId = thirdPartyId
      this.order.orderItems = []
    }
  }

  get date(): string {
    return this.order.date
  }

  set date(date: string) {
    this.order.date = date
  }

  get label(): string | undefined {
    return this.order.label
  }

  set label(label: string | undefined) {
    this.order.label = label
  }

  get totalWithoutTax(): number {
    return this.order.totalWithoutTax
  }

  get orderItems(): Array<OrderItemVM> {
    const res: Array<OrderItemVM> = []
    this.order.orderItems.forEach((oi) => {
      if (oi instanceof CustomOrderItem) {
        res.push(new CustomOrderItemVM(oi))
      } else {
        res.push(new OrderItemVM(oi))
      }
    })
    return res
  }

  get totalsByVat(): Object {
    return this.order.totalsByVat
  }

  get totalWithTax(): number {
    return this.order.totalWithTax
  }

  addOrderItem(orderItem) {
    const oi = new OrderItem(
      orderItem.productName,
      orderItem.offerName,
      orderItem.price,
      orderItem.vat,
      orderItem.unit.unit,
      1
    )
    this.order.addOrderItem(oi)
  }

  removeOrderItem(index) {
    this.order.removeOrderItem(index)
  }

  orderItemQuantityChanged(quantity, index) {
    this.order.orderItemQuantityChanged(quantity, index)
  }

  addCustomOrderItem() {
    this.order.addOrderItem(new CustomOrderItem())
  }
}
