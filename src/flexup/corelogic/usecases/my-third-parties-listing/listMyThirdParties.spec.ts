import { configureReduxStore, ReduxStore } from '~/src/flexup/store/configureStore'
import { getMyThirdParties } from '~/src/flexup/store/reducers/thirdPartiesList.reducer'
import { listMyThirdParties } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/listMyThirdParties'
import {
  InMemoryThirdPartyGateway
} from '~/src/flexup/adapters/secondary/inMemoryThirdPartyGateway'

describe('Listing of my third parties', () => {
  let store: ReduxStore
  let thirdPartyGateway: InMemoryThirdPartyGateway

  beforeEach(() => {
    thirdPartyGateway = new InMemoryThirdPartyGateway()
    store = configureReduxStore({ thirdPartyGateway })
  })

  describe('No third party', () => {
    it('should not list any third party', () => {
      expect(getMyThirdParties(store.getState()).data).toEqual([])
    })
  })

  describe('Some third parties are available', () => {
    it('should list all of them', async () => {
      const cosys = { id: 1, name: 'Cosys' }
      thirdPartyGateway.feedWith(cosys)
      await store.dispatch(listMyThirdParties)
      expect(getMyThirdParties(store.getState()).data).toEqual([cosys])
    })
  })
})
