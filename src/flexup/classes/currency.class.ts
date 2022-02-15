// @ts-ignore
import fetch from 'cross-fetch'
import { Currency as CurrencyInterface } from './currency.interface'

export class Currency implements CurrencyInterface {
  private _iso3: string = 'EUR'
  private _minor: number = 2
  private _active: boolean = true
  private readonly locale: string = 'fr'

  constructor(iso3: string = 'EUR', minor: number = 2, active: boolean = true, locale: string = 'fr') {
    this.iso3 = iso3
    this.minor = minor
    this.active = active
    this.locale = locale
  }

  set iso3(iso3: string) {
    this._iso3 = iso3
  }

  get iso3(): string {
    return this._iso3
  }

  set minor(value: number) {
    if (value < 0 || value > 9) {
      throw new Error('Minor must be greater or equal to 0 and less or equal to 9')
    }
    this._minor = value
  }

  get minor(): number {
    return this._minor
  }

  set active(active: boolean) {
    this._active = active
  }

  get active(): boolean {
    return this._active
  }

  get facteur(): number {
    return 10 ** this._minor
  }

  toAmount(amountValue: number): number {
    return amountValue / this.facteur
  }

  toLocaleString(amountValue: number): string {
    const amount = this.toAmount(amountValue)
    // const amount = amountValue / this.facteur
    return amount.toLocaleString(this.locale, {
      style: 'currency',
      currency: this._iso3,
      minimumSignificantDigits: this.minor + 1,
    })
  }

  async convertTo(toCurrency: string = '') {
    let result = 0
    if (this.iso3 === toCurrency || toCurrency === '') {
      result = 1
    } else {
      const amount = 1
      const currencyApiUrl = `https://api.exchangerate.host/convert?amount=${amount}&from=${this.iso3}&to=${toCurrency}`
      const initConfig = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
      result = await fetch(currencyApiUrl, initConfig)
        .then((res) => {
          console.log('then 1 res :', res)
          return res.json()
        })
        .then((res) => {
          console.log('then 2res :', res)
          return res.result
        })
        .catch(() => 0)
    }
    return result
  }
}
