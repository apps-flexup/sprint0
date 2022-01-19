import { OrderItemVM } from '~/src/flexup/adapters/primary/view-models-generator/create-order-screen/create-purchase-screen/orderItemVM'
import {
  OrderItem
} from '~/src/flexup/corelogic/entities/orders/orderItem'

export class CustomOrderItemVM extends OrderItemVM {
  canEditProductName: boolean = true
  canEditOfferName: boolean = true
  canEditPrice: boolean = true
  canEditVat: boolean = true
  canEditUnit: boolean = true

  constructor(orderItem?: OrderItem) {
    super(orderItem || new OrderItem())
  }

  setProductName(name: string): void {
    this.orderItem.productName = name
  }

  setOfferName(name: string): void {
    this.orderItem.offerName = name
  }

  setPrice(price: number): void {
    this.orderItem.price.amount = price
  }

  setVat(vat: number): void {
    this.orderItem.vat = vat
  }

  setUnit(unit: string): void {
    this.orderItem.unit = unit
  }
}
