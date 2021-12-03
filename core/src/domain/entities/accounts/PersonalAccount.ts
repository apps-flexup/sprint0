import { Account } from './Account'
import { AccountType } from './AccountType'

export class PersonalAccount extends Account {
  private firstname: string
  private lastname: string

  constructor(id: number, firstname: string, lastname: string) {
    super(id, AccountType.Personal)
    this.firstname = firstname
    this.lastname = lastname
  }
}
