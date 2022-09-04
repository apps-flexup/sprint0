import { Product as ProductInterface } from './product.interface'
import { Price } from './price.class'
import { VAT } from './vat.class'
import { Currency } from './currency.class'

export class Product implements ProductInterface {
  private precision: number = 2
  private _locale: string = 'fr'
  private _name: string = 'product name'
  private _price: any = new Price(0, 0, 'EUR', true, this.locale)
  private _vat: any = new VAT(0, 2, this.locale)
  private _currency: any = new Currency('EUR', 2, true, this.locale)
  private _description: string = 'a description of the product'
  private _vatIncluded: boolean = false

  constructor(
    name: string = 'produit',
    price: any = new Price(0, 0, 'EUR', true, 'fr', 3),
    vat: any = new VAT(0, 2, 'fr'),
    currency: any = new Currency('EUR', 2, true, 'fr'),
    description: string = '',
    vatIncluded: boolean = true,
    locale: string = 'fr'
  ) {
    this.locale = locale
    this.vatIncluded = vatIncluded
    this.currency = currency
    this.vat = vat
    this.price = price
    this.description = description
    this.name = name
  }

  set name(value: string) {
    this._name = value
  }

  get name(): string {
    return this._name
  }

  set price(value: any) {
    if (typeof value === 'number') {
      this._price = new Price(value, this.vat, this.currency, this.vatIncluded, this.locale, this.precision + 1)
    } else {
      this._price = value
    }
  }

  get amount(): any {
    return this._price.amount
  }

  get price(): any {
    return this._price
  }

  set vat(value: any) {
    if (typeof value === 'number') {
      this._vat = new VAT(value, this.precision + 1, this.locale)
    } else {
      this._vat = value
    }
  }

  get vat() {
    return this._vat
  }

  get rate() {
    return this._vat.rate
  }

  get iso3() {
    return this._currency.iso3
  }

  get currency() {
    return this._currency
  }

  set currency(value: any) {
    if (typeof value === 'string') {
      this._currency = new Currency(value, this.precision, true, this.locale)
    } else {
      this._currency = value
    }
  }

  set description(value: string) {
    this._description = value
  }

  get description(): string {
    return this._description
  }

  get vatIncluded(): boolean {
    return this._vatIncluded
  }

  set vatIncluded(value: boolean) {
    this._vatIncluded = value
  }

  set locale(value: string) {
    this._locale = value
  }

  get locale(): string {
    return this._locale
  }
}
