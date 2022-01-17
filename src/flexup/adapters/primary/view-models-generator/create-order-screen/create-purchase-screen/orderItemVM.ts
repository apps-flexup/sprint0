import {
  OrderItem
} from '~/src/flexup/corelogic/entities/orders/orderItem'

export class OrderItemVM {
  orderItem: OrderItem

  canEditProductName: boolean = false
  canEditOfferName: boolean = false
  canEditPrice: boolean = false
  canEditVat: boolean = false
  canEditUnit: boolean = false

  constructor(orderItem: OrderItem) {
    this.orderItem = orderItem
  }

  get vat(): number {
    return this.orderItem.vat
  }

  get quantity(): number {
    return this.orderItem.quantity
  }

  set quantity(quantity: number) {
    this.orderItem.quantity = quantity
  }

  get price(): any {
    return this.orderItem.price
  }

  get valueWithoutTax(): number {
    return this.orderItem.valueWithoutTax
  }

  get valueWithTax(): number {
    return this.orderItem.valueWithTax
  }

  setProductName(_name: string): void {
    throw new Error('Can\'t set product name of order item')
  }

  setOfferName(_name: string): void {
    throw new Error('Can\'t set offer name of order item')
  }

  setPrice(_price: number): void {
    throw new Error('Can\'t set price of order item')
  }

  setVat(_vat: number): void {
    throw new Error('Can\'t set vat of order item')
  }

  setUnit(_unit: string): void {
    throw new Error('Can\'t set unit of order item')
  }
}
