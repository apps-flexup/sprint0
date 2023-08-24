import { VAT as VATInterface } from './vat.interface'

export class VAT implements VATInterface {
  private _rate: number = 0
  private _precision: number = 3
  private _locale: string = 'fr'
  facteur: number = 100

  constructor(rate: number = 0, precision: number = 2, locale: string = 'fr') {
    this.rate = rate
    this.precision = precision
    this.locale = locale
  }

  get value(): number {
    return this._rate / this.facteur
  }

  get rate(): number {
    return this._rate
  }

  set rate(value: number) {
    if (value < 0 || value > 100) throw new Error('Incorrect VAT rate')
    this._rate = value
  }

  get precision(): number {
    return this._precision
  }

  get locale() {
    return this._locale
  }

  set locale(value: string) {
    this._locale = value
  }

  set precision(value: number) {
    if (value < 0 || value > 9) throw new Error('Incorrect VAT precision')
    this._precision = value
  }

  toString() {
    return this.value.toLocaleString(this.locale, {
      style: 'percent',
      minimumSignificantDigits: this.precision
    })
  }
}
