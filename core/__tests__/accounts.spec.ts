import { InMemoryAccountRepository } from '../src/adapters/InMemoryAccountRepository'
import { PersonalAccount } from '../src/domain/entities/accounts/PersonalAccount'
import { CreatePersonalAccount } from '../src/usecases/CreatePersonalAccount'
import { GetAllAccounts } from '../src/usecases/GetAllAccounts'

describe('Accounts', () => {
  describe('Create', () => {
    it('should create a personal account', async () => {
      const fred = new PersonalAccount(1, 'Frédéric', 'Lasnier')
      const accountRepository = new InMemoryAccountRepository()
      const createPersonalAccount = new CreatePersonalAccount(accountRepository)
      await createPersonalAccount.handle(fred)
      const expected = {
        id: 1,
        firstname: 'Frédéric',
        lastname: 'Lasnier',
        type: 'Personal'
      }
      expect(await accountRepository.getById(1)).toEqual(expected)
    })
  })
  describe('Get', () => {
    it('should return empty', async () => {
      const accountRepository = new InMemoryAccountRepository()
      const getAllAccounts = new GetAllAccounts(accountRepository)
      const accounts = await getAllAccounts.handle()
      expect(accounts).toEqual([])
    })
    it('should return accounts if there is accounts', async () => {
      const fred = new PersonalAccount(1, 'Frédéric', 'Lasnier')
      const fabrizio = new PersonalAccount(2, 'Fabrizio', 'Nastri')
      const accountRepository = new InMemoryAccountRepository()
      accountRepository.add(fred)
      accountRepository.add(fabrizio)
      const getAllAccounts = new GetAllAccounts(accountRepository)
      const accounts = await getAllAccounts.handle()
      expect(accounts.length).toBe(2)
      expect(accounts).toEqual([fred, fabrizio])
    })
  })
})
