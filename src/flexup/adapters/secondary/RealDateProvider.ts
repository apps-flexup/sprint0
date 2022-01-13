import { DateTime } from 'luxon'
import { DateProvider } from '../../corelogic/usecases/creating-order/DateProvider'

export class RealDateProvider implements DateProvider {
  now(): string {
    return DateTime.local().toISODate()
  }
}
