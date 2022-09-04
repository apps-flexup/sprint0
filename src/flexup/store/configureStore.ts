// eslint-disable-next-line import/named
import { Action, applyMiddleware, combineReducers, createStore, Store } from 'redux'
// eslint-disable-next-line import/named
import thunk, { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AppState } from './appState.interface'
import { coreLogic } from './reducers/coreLogic.reducer'
import { OrderGateway } from '~/src/flexup/corelogic/gateways/orderGateway.interface'
import { ThirdPartyGateway } from '~/src/flexup/corelogic/gateways/thirdPartyGateway.interface'

interface Dependencies {
  orderGateway: OrderGateway
  thirdPartyGateway: ThirdPartyGateway
}

export const configureReduxStore = (dependencies: Partial<Dependencies>): Store<AppState> =>
  createStore(
    combineReducers({
      coreLogic
    }),
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(dependencies) as ThunkMiddleware<AppState, Action, Dependencies>)
    )
  )

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>
}
export type ThunkResult<R> = ThunkAction<R, AppState, Dependencies, Action>

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

export function createAction<T extends string>(type: T): Action<T>
export function createAction<T extends string, P>(type: T, payload?: P): ActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload }
}

type FunctionType = (...args: any[]) => any
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType }

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>
