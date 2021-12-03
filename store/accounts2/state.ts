import { Account } from '~/core/src/domain/entities/accounts/Account'

export const state = () => ({
  items: [] as Account[],
  current: null as Account | null
})

export type RootState = ReturnType<typeof state>

export default state
