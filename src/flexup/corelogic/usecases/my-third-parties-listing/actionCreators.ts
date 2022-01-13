import { ActionsUnion, createAction } from '../../../store/configureStore'
import { ThirdParty } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/thirdParty.interface'

export const Actions = {
  myThirdPartiesListed: (thirdParties: ThirdParty[]) =>
    createAction('MY_THIRD_PARTIES_LISTED', { thirdParties })
}

// eslint-disable-next-line
export type Actions = ActionsUnion<typeof Actions>
