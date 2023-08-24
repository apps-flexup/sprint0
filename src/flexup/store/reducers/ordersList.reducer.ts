import { combineReducers } from 'redux'
import { AppState } from '../appState.interface'
import * as actionCreators from '../../corelogic/usecases/my-orders-listing/actionCreators'
import { Order } from '~/src/flexup/corelogic/entities/orders/order'

const data = (state: Order[] = [], action: actionCreators.Actions) => {
  if (action.type === 'MY_ORDERS_LISTED') {
    return action.payload.orders
  } else if (action.type === 'PURCHASE_CREATED') {
    state.push(action.payload.purchase)
  }
  return state
}

export const ordersList = combineReducers({
  data
})

export const getMyOrders = (state: AppState) => state.coreLogic.ordersList
