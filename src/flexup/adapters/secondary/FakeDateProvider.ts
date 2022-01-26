import { DateProvider } from '../../corelogic/usecases/creating-order/DateProvider'

export class FakeDateProvider implements DateProvider {
  private readonly date: string

  constructor(date: string) {
    this.date = date
  }

  now(): string {
    return this.date
  }
}
