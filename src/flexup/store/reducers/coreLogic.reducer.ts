import { combineReducers } from 'redux'
import { ordersList } from './ordersList.reducer'
import { thirdPartiesList } from '~/src/flexup/store/reducers/thirdPartiesList.reducer'

export const coreLogic = combineReducers({
  ordersList,
  thirdPartiesList
})
