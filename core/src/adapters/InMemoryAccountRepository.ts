import { Account } from '../domain/entities/accounts/Account'
import { AccountRepository } from '../domain/repositories/AccountRepository'

export class InMemoryAccountRepository implements AccountRepository {
  private accounts: Array<Account> = []

  getById(id: number): Promise<Account | undefined> {
    return Promise.resolve(
      this.accounts.find((account) => account.getId() === id)
    )
  }

  getAll(): Promise<Array<Account>> {
    return Promise.resolve(JSON.parse(JSON.stringify(this.accounts)))
  }

  add(account: Account): void {
    this.accounts.push(account)
  }
}
