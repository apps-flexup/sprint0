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

  get valueWithoutTax(): number {
    return this.price.amount * this.quantity
  }

  get valueWithTax(): number {
    return this.valueWithoutTax + this.price.amount * this.quantity * this.vat
  }
}
