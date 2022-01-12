import { ThirdParty } from '~/src/flexup/corelogic/usecases/my-third-parties-listing/thirdParty.interface'

export class InMemoryThirdPartyGateway {
  private thirdParties: ThirdParty[]

  constructor(thirdParties: ThirdParty[] = []) {
    this.thirdParties = thirdParties
  }

  listMyThirdParties(): Promise<ThirdParty[]> {
    return Promise.resolve(this.thirdParties)
  }

  feedWith(...thirdParties: ThirdParty[]) {
    this.thirdParties = thirdParties
  }
}
