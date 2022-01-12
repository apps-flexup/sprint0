import { combineReducers } from 'redux'
import { AppState } from '../appState.interface'
import * as actionCreators from '../../corelogic/usecases/my-third-parties-listing/actionCreators'
import { ThirdParty } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/thirdParty.interface'

const data = (state: ThirdParty[] = [], action: actionCreators.Actions) => {
  if (action.type === 'MY_THIRD_PARTIES_LISTED') {
    return action.payload.thirdParties
  }
  return state
}

export const thirdPartiesList = combineReducers({
  data
})

export const getMyThirdParties = (state: AppState) =>
  state.coreLogic.thirdPartiesList
