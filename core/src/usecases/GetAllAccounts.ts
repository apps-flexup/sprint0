import { Account } from '../domain/entities/accounts/Account'
import { AccountRepository } from '../domain/repositories/AccountRepository'

export class GetAllAccounts {
  private accountRepository: AccountRepository

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository
  }

  async handle(): Promise<Array<Account>> {
    return await this.accountRepository.getAll()
  }
}
