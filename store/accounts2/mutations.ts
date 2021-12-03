import { MutationTree } from 'vuex'
import { RootState } from './state'
import { Account } from '~/core/src/domain/entities/accounts/Account'

const mutations: MutationTree<RootState> = {
  set(state, accounts: Account[]) {
    state.items = accounts
  },
  add(state, account) {
    const accountAlreadyExists = state.items.find((element) => {
      return element.getId() === account.id
    })
    if (!accountAlreadyExists) state.items.push(account)
  }
}

export default mutations
