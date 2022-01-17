import { DateProvider } from '~/src/flexup/corelogic/usecases/creating-order/DateProvider'

export class OrderItem {
  productName: string
  offerName: string
  price: any
  vat: number
  unit: string
  quantity: number

  constructor(
    productName: string = '',
    offerName: string = '',
    price: any = { amount: 0, currency: 'EUR' },
    vat: number = 0,
    unit: string = '',
    quantity: number = 1
  ) {
    this.productName = productName
    this.offerName = offerName
    this.price = price
    this.vat = vat
    this.unit = unit
    this.quantity = quantity
  }
}

export class CustomOrderItem extends OrderItem {}

export class Order {
  thirdPartyId: number
  date: string
  label?: string
  orderItems: Array<OrderItem>

  constructor(
    thirdPartyId: number = -1,
    date: string = '',
    label: string = '',
    orderItem: Array<OrderItem> = []
  ) {
    this.thirdPartyId = thirdPartyId
    this.date = date
    this.label = label
    this.orderItems = orderItem
  }
}

export class CreatePurchaseVM {
  orderItems: OrderItemVM[]

  private order: Order

  constructor(date: string) {
    this.order = new Order(-1, date, '', [])
    this.orderItems = []
  }

  get thirdPartyId(): number {
    return this.order.thirdPartyId
  }

  set thirdPartyId(thirdPartyId: number) {
    if (this.order.thirdPartyId !== thirdPartyId) {
      this.order.thirdPartyId = thirdPartyId
      this.orderItems = []
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
    let res = 0
    this.orderItems.forEach((oi) => {
      res += oi.valueWithoutTax
    })
    return res
  }

  // get orderItems(): Array<OrderItemVM> {
  //   const res = []
  //   this.order.orderItems.forEach((oi) => {
  //     if (oi instanceof CustomOrderItem) {
  //       res.push(new CustomOrderItemVM(oi))
  //     } else {
  //       res.push(new OrderItemVM(oi))
  //     }
  //   })
  //   return res
  // }

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

  addOrderItem(orderItem) {
    const oi2 = new OrderItem(
      orderItem.productName,
      orderItem.offerName,
      orderItem.price,
      orderItem.vat,
      orderItem.unit.unit,
      1
    )
    this.order.orderItems.push(oi2)

    const oi = new OrderItemVM(
      oi2,
      orderItem.productName,
      orderItem.offerName,
      orderItem.price,
      orderItem.vat,
      orderItem.unit.unit,
      1
    )
    this.orderItems.push(oi)
    // ------
  }

  removeOrderItem(index) {
    this.orderItems.splice(index, 1)
    // ---
    this.order.orderItems.splice(index, 1)
  }

  orderItemQuantityChanged(quantity, index) {
    this.orderItems[index].quantity = quantity
    // ---
    this.order.orderItems[index].quantity = quantity
  }

  addCustomOrderItem() {
    const oi = new CustomOrderItemVM()
    this.orderItems.push(oi)
    // ---
    const oi2 = new CustomOrderItem()
    this.order.orderItems.push(oi2)
  }
}

export class OrderItemVM {
  productName: string
  offerName: string
  price: any
  vat: number
  unit: string
  quantity: number
  item: OrderItem

  canEditProductName: boolean = false
  canEditOfferName: boolean = false
  canEditPrice: boolean = false
  canEditVat: boolean = false
  canEditUnit: boolean = false

  constructor(
    item: OrderItem,
    productName: string,
    offerName: string,
    price: any,
    vat: number,
    unit: string,
    quantity: number = 1
  ) {
    this.item = item
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
    super(new OrderItem(), '', '', { amount: 0, currency: 'EUR' }, 0, '', 1)
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

export const createPurchaseVM = (
  dateProvider: DateProvider
): CreatePurchaseVM => {
  return new CreatePurchaseVM(dateProvider.now())
}
