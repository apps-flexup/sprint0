import { ActionTree } from 'vuex'
import { RootState } from './state'
import { createPersonalAccount, getAllAccounts } from '@/container'
import { PersonalAccount } from '@/core/src/domain/entities/accounts/PersonalAccount'
import { Account } from '@/core/src/domain/entities/accounts/Account'

const actions: ActionTree<RootState, RootState> = {
  async createPersonalAccount({ commit }, personalAccount: PersonalAccount) {
    await createPersonalAccount.handle(personalAccount)
    commit('add', personalAccount as Account)
  },
  async getAll({ commit }) {
    const accounts: Account[] = await getAllAccounts.handle()
    commit('set', accounts)
  }
}

export default actions
