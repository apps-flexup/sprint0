import { GetterTree } from 'vuex'
import { RootState } from './state'

const getters: GetterTree<RootState, RootState> = {
  all: (state) => {
    return state.items
  }
}

export default getters
