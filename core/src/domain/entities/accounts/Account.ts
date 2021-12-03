import { AccountType } from './AccountType'

export abstract class Account {
  private id: number
  protected type: AccountType

  constructor(id: number, type: AccountType) {
    this.id = id
    this.type = type
  }

  getType(): AccountType {
    return this.type
  }

  getId(): number {
    return this.id
  }
}
