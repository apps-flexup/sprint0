import { ActionsUnion, createAction } from '../../../store/configureStore'
import { Order } from '~/src/flexup/corelogic/entities/orders/order'

export const Actions = {
  myOrdersListed: (orders: Order[]) => createAction('MY_ORDERS_LISTED', { orders }),
  purchaseCreated: (purchase: Order) => createAction('PURCHASE_CREATED', { purchase }),
}

// eslint-disable-next-line
export type Actions = ActionsUnion<typeof Actions>
