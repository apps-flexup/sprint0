import { ThunkResult } from '~/src/flexup/store/configureStore'
import { Actions } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/actionCreators'
import { ThirdPartyGateway } from '~/src/flexup/corelogic/gateways/thirdPartyGateway.interface'

export const listMyThirdParties: ThunkResult<Promise<void>> = async (
  dispatch,
  _getState,
  { thirdPartyGateway }: { thirdPartyGateway: ThirdPartyGateway },
) => {
  const orders = await thirdPartyGateway.listMyThirdParties()
  dispatch(Actions.myThirdPartiesListed(orders))
}
