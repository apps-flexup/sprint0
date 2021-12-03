import { Account } from '../domain/entities/accounts/Account'
import { AccountRepository } from '../domain/repositories/AccountRepository'

export class CreatePersonalAccount {
  private accountRepository: AccountRepository

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository
  }

  async handle(account: Account) {
    await this.accountRepository.add(account)
  }
}
