import { Currency } from './currency.class'
import { Price as PriceInterface } from './price.interface'
import { VAT } from './vat.class'

export class Price implements PriceInterface {
  private precision: number = 3
  private _locale: string = 'fr'
  private _amount: number = 0
  private _vat: any = new VAT(0, this.precision, this.locale)
  private _currency: any = new Currency('EUR', 2, true, this.locale)
  private _vatIncluded: boolean = false

  constructor(
    amount: number = 0,
    vat: any = 0,
    currency: any = new Currency('EUR', 2, true, 'fr'),
    vatIncluded: boolean = true,
    locale: string = 'fr',
    precision: number = 3,
  ) {
    this.vatIncluded = vatIncluded
    this.locale = locale
    this.precision = precision
    this.currency = currency
    this.vat = vat
    this.amount = amount
  }

  set locale(value: string) {
    this._locale = value
  }

  get locale(): string {
    return this._locale
  }

  get amount(): number {
    return this._amount
  }

  set amount(value: number) {
    this._amount = value
  }

  get amountHT(): number {
    return this.vatIncluded ? Math.floor(this.amount / (1 + this.rate)) : this.amount
  }

  get amountTTC(): number {
    return this.vatIncluded ? this.amount : this.amountHT + this.amountVAT
  }

  get amountVAT(): number {
    if (this.rate === 0) return 0
    return Math.ceil(this.amountHT * this.rate)
  }

  get vat() {
    return this._vat
  }

  get rate(): number {
    return this._vat.value
  }

  set vat(value: any) {
    if (typeof value === 'number') {
      this._vat = new VAT(value, this.precision, this.locale)
    } else {
      this._vat = value
    }
  }

  get vatIncluded(): boolean {
    return this._vatIncluded
  }

  set vatIncluded(value: boolean) {
    this._vatIncluded = value
  }

  get currency() {
    return this._currency
  }

  set currency(value: any) {
    if (typeof value === 'string') {
      this._currency = new Currency(value, 2, true, this.locale)
    } else {
      this._currency = value
    }
  }

  get vatString(): string {
    return this.vat.toLocaleString(this.locale, {
      style: 'percent',
      minimumSignificantDigits: 3,
    })
  }

  get amountHTString(): string {
    return this.currency.toLocaleString(this.amountHT)
  }

  get amountVATString(): string {
    return this.currency.toLocaleString(this.amountVAT)
  }

  get amountTTCString(): string {
    return this.currency.toLocaleString(this.amountTTC)
  }
}
