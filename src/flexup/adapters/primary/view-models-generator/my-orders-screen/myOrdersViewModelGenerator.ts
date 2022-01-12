import { AppState } from '~/src/flexup/store/appState.interface'
import { getMyOrders } from '~/src/flexup/store/reducers/ordersList.reducer'
import { getMyThirdParties } from '~/src/flexup/store/reducers/thirdPartiesList.reducer'

export interface MyOrdersVM {
  orders: OrderVM[]
}

export interface OrderVM {
  id: string
  thirdParty: string
  date: string
  label?: string
}

export const getMyOrdersVM = (state: AppState): MyOrdersVM => {
  const myOrdersSelector = getMyOrders(state)
  const myThirdPartiesSelector = getMyThirdParties(state).data
  return {
    orders: myOrdersSelector.data.map((o) => {
      return {
        id: o.id,
        thirdParty:
          myThirdPartiesSelector.find(
            (thirdParty) => o.thirdPartyId === thirdParty.id
          )?.name || '',
        date: o.date,
        label: o.label
      }
    })
  }
}
