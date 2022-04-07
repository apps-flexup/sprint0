import { AppState } from '~/src/flexup/store/appState.interface'
import { getMyOrders } from '~/src/flexup/store/reducers/ordersList.reducer'
import { getMyThirdParties } from '~/src/flexup/store/reducers/thirdPartiesList.reducer'
import { Order } from '~/src/flexup/corelogic/entities/orders/order'

export interface MyOrdersVM {
  headers: Header[]
  orders: OrderVM[]
}

export enum Alignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export interface Header {
  align: Alignment
  sortable: boolean
  text: string
  value: string
  order: number
  customizable: boolean
  active: boolean
  displayed: boolean
}

export interface OrderVM {
  id: string
  thirdParty: string
  date: string
  label?: string
  value: any
}

const headers = [
  {
    align: Alignment.LEFT,
    sortable: true,
    text: 'headers.orders.thirdParty',
    value: 'thirdParty',
    order: 0,
    customizable: true,
    active: true,
    displayed: true,
  },
  {
    align: Alignment.LEFT,
    sortable: true,
    text: 'headers.orders.date',
    value: 'date',
    order: 0,
    customizable: true,
    active: true,
    displayed: true,
  },
  {
    align: Alignment.RIGHT,
    sortable: true,
    text: 'headers.orders.value',
    value: 'value',
    order: 0,
    customizable: true,
    active: true,
    displayed: true,
  },
  {
    align: Alignment.CENTER,
    sortable: true,
    text: 'headers.orders.status',
    value: 'status',
    order: 0,
    customizable: true,
    active: true,
    displayed: true,
  },
]

const getThirdPartyName = (thirdPartyId: number, state: AppState) => {
  const myThirdPartiesSelector = getMyThirdParties(state).data
  const thirdParty = myThirdPartiesSelector.find((tp) => thirdPartyId === tp.id)
  return thirdParty?.name || thirdPartyId.toString()
}

export const getMyOrdersVM = (state: AppState): MyOrdersVM => {
  const myOrdersSelector = getMyOrders(state)
  return {
    orders: myOrdersSelector.data.map((o: Order) => {
      return {
        id: o.id,
        thirdParty: getThirdPartyName(o.thirdPartyId, state),
        date: o.date,
        label: o.label,
        value: { amount: o.totalWithTax, currency: 'EUR' },
        status: o.status
      }
    }),
    headers,
  }
}
