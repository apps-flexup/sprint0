export enum OrderStatus {
  NEW = 'NEW',
  DRAFT = 'DRAFT'
}

export interface Order {
  id: string
  thirdPartyId: number
  date: string
  label?: string
  orderItems: OrderItem[]
  status: OrderStatus
}

export interface OrderItem {
  productName: string
  offerName: string
  price: any
  vat: number
  unit: string
  quantity: number
}
