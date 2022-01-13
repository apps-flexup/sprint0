import { DateProvider } from '~/src/flexup/corelogic/usecases/creating-order/DateProvider'

export class PurchaseVM {
  thirdPartyId: number
  date: string
  label?: string
  orderItems: OrderItemVM[]

  constructor(date: string) {
    this.thirdPartyId = -1
    this.date = date
    this.orderItems = []
  }

  get totalWithoutTax(): number {
    let res = 0
    this.orderItems.forEach((oi) => {
      res += oi.valueWithoutTax
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

  get totalWithTax(): number {
    let res = 0
    this.orderItems.forEach((oi) => {
      res += oi.valueWithTax
    })
    return res
  }

  thirdPartyIdChanged(thirdPartyId: number) {
    if (this.thirdPartyId !== thirdPartyId) {
      this.thirdPartyId = thirdPartyId
      this.orderItems = []
    }
  }

  dateChanged(date: string) {
    this.date = date
  }

  labelChanged(label: string) {
    this.label = label
  }

  addOrderItem(orderItem) {
    const oi = new OrderItemVM(
      orderItem.productName,
      orderItem.offerName,
      orderItem.price,
      orderItem.vat,
      orderItem.unit.unit,
      1
    )
    this.orderItems.push(oi)
  }

  removeOrderItem(index) {
    this.orderItems.splice(index, 1)
  }

  orderItemQuantityChanged(quantity, index) {
    this.orderItems[index].quantity = quantity
  }

  addCustomOrderItem() {
    const oi = new CustomOrderItemVM()
    this.orderItems.push(oi)
  }
}

export class OrderItemVM {
  productName: string
  offerName: string
  price: any
  vat: number
  unit: string
  quantity: number

  canEditProductName: boolean = false
  canEditOfferName: boolean = false
  canEditPrice: boolean = false
  canEditVat: boolean = false
  canEditUnit: boolean = false

  constructor(
    productName: string,
    offerName: string,
    price: any,
    vat: number,
    unit: string,
    quantity: number = 1
  ) {
    this.productName = productName
    this.offerName = offerName || ''
    this.price = price
    this.vat = vat
    this.unit = unit
    this.quantity = quantity
  }

  get valueWithoutTax(): number {
    return this.price.amount * this.quantity
  }

  get valueWithTax(): number {
    return this.valueWithoutTax + this.price.amount * this.quantity * this.vat
  }

  setProductName(_name: string): void {
    throw new Error("Can't set product name of order item")
  }

  setOfferName(_name: string): void {
    throw new Error("Can't set offer name of order item")
  }

  setPrice(_price: number): void {
    throw new Error("Can't set price of order item")
  }

  setVat(_vat: number): void {
    throw new Error("Can't set vat of order item")
  }

  setUnit(_unit: string): void {
    throw new Error("Can't set unit of order item")
  }
}

export class CustomOrderItemVM extends OrderItemVM {
  canEditProductName: boolean = true
  canEditOfferName: boolean = true
  canEditPrice: boolean = true
  canEditVat: boolean = true
  canEditUnit: boolean = true

  constructor() {
    super('', '', { amount: 0, currency: 'EUR' }, 0, '', 1)
  }

  setProductName(name: string): void {
    this.productName = name
  }

  setOfferName(name: string): void {
    this.offerName = name
  }

  setPrice(price: number): void {
    this.price.amount = price
  }

  setVat(vat: number): void {
    this.vat = vat
  }

  setUnit(unit: string): void {
    this.unit = unit
  }
}

export const createPurchaseVM = (dateProvider: DateProvider): PurchaseVM => {
  return new PurchaseVM(dateProvider.now())
}
