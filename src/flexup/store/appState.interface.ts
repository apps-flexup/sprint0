import { ThirdParty } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/thirdParty.interface'
import { Order } from '~/src/flexup/corelogic/entities/orders/order'

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
