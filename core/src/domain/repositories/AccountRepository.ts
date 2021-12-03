import { Account } from '../entities/accounts/Account'

export interface AccountRepository {
  getById(id: number): Promise<Account | undefined>
  add(account: Account): void
  getAll(): Promise<Array<Account>>
}
