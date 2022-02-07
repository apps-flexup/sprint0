import { DateProvider } from '~/src/flexup/corelogic/usecases/creating-order/DateProvider'
import { CreatePurchaseVM } from '~/src/flexup/adapters/primary/view-models-generator/create-order-screen/create-purchase-screen/createPurchaseVM'

export const createPurchaseVM = (dateProvider: DateProvider): CreatePurchaseVM => {
  return new CreatePurchaseVM(dateProvider.now())
}
