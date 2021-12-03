import { InMemoryAccountRepository } from './core/src/adapters/InMemoryAccountRepository'
import { AccountRepository } from './core/src/domain/repositories/AccountRepository'
import { CreatePersonalAccount } from './core/src/usecases/CreatePersonalAccount'
import { GetAllAccounts } from './core/src/usecases/GetAllAccounts'

const accountRepository: AccountRepository = new InMemoryAccountRepository()

export const createPersonalAccount: CreatePersonalAccount = new CreatePersonalAccount(
  accountRepository
)

export const getAllAccounts: GetAllAccounts = new GetAllAccounts(
  accountRepository
)
