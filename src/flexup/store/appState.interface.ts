import { Order } from '../corelogic/usecases/my-orders-listing/order.interface'
import { ThirdParty } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/thirdParty.interface'

export interface AppState {
  coreLogic: {
    ordersList: {
      data: Order[]
    }
    thirdPartiesList: {
      data: ThirdParty[]
    }
  }
}
