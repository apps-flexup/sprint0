import { Product } from './product.class'
import { Currency } from './currency.class'
import { VAT } from './vat.class'
import { Price } from './price.class'

function checkProduct(
  name: string,
  amount: any,
  rate: any,
  currency: any,
  includedVAT: boolean,
  HT: number,
  TVA: number,
  TTC: number,
  defaultLocal: string
) {
  const facteur = 100
  const precision = 3
  const currencyStr = typeof currency === 'string' ? currency : currency.iso3
  const vatRate = typeof rate === 'number' ? rate : rate.rate
  const description = `description de ${name}`
  const amountExpected = typeof amount === 'number' ? amount : amount.amount
  const result = new Product(name, amount, rate, currency, description, includedVAT, defaultLocal)
  const expectedStringResultHT = (HT / facteur).toLocaleString(defaultLocal, {
    style: 'currency',
    currency: currencyStr,
    minimumSignificantDigits: precision
  })
  const expectedStringResultVAT = (TVA / facteur).toLocaleString(defaultLocal, {
    style: 'currency',
    currency: currencyStr,
    minimumSignificantDigits: precision
  })
  const expectedStringResultTTC = (TTC / facteur).toLocaleString(defaultLocal, {
    style: 'currency',
    currency: currencyStr,
    minimumSignificantDigits: precision
  })
  const expectedStringVAT = (vatRate / 100).toLocaleString(defaultLocal, {
    style: 'percent',
    minimumSignificantDigits: precision
  })
  expect(result).toBeInstanceOf(Product)
  expect(result).toBeDefined()
  expect(result.name).toEqual(name)
  expect(result.description).toEqual(description)
  expect(result.amount).toEqual(amountExpected)
  expect(result.rate).toEqual(vatRate)
  expect(result.iso3).toEqual(currencyStr)
  expect(result.price.amountHT).toEqual(HT)
  expect(result.price.amountVAT).toEqual(TVA)
  expect(result.price.amountTTC).toEqual(TTC)
  expect(result.price.amountHTString).toEqual(expectedStringResultHT)
  expect(result.price.amountVATString).toEqual(expectedStringResultVAT)
  expect(result.price.amountTTCString).toEqual(expectedStringResultTTC)
  expect(result.vat.toString()).toEqual(expectedStringVAT)
}

describe('Product', () => {
  // it('should return an empty product', () => {
  //   const product = new Product('plop', 1200, 0, 'EUR', 'description de plop', true, 'fr')
  //   console.log('product :', product.toString())
  // })
  it.each`
    name           | amount  | rate   | includedVAT | HT      | TVA    | TTC     | currency | defaultLocale
    ${'produit 0'} | ${0}    | ${0}   | ${false}    | ${0}    | ${0}   | ${0}    | ${'EUR'} | ${'fr'}
    ${'produit 1'} | ${1200} | ${20}  | ${true}     | ${1000} | ${200} | ${1200} | ${'EUR'} | ${'fr'}
    ${'produit 2'} | ${1000} | ${20}  | ${false}    | ${1000} | ${200} | ${1200} | ${'EUR'} | ${'fr'}
    ${'produit 3'} | ${210}  | ${5.5} | ${true}     | ${199}  | ${11}  | ${210}  | ${'EUR'} | ${'fr'}
    ${'produit 4'} | ${199}  | ${5.5} | ${false}    | ${199}  | ${11}  | ${210}  | ${'EUR'} | ${'fr'}
    ${'product 0'} | ${0}    | ${0}   | ${false}    | ${0}    | ${0}   | ${0}    | ${'EUR'} | ${'en'}
    ${'product 1'} | ${1200} | ${20}  | ${true}     | ${1000} | ${200} | ${1200} | ${'EUR'} | ${'en'}
    ${'product 2'} | ${1000} | ${20}  | ${false}    | ${1000} | ${200} | ${1200} | ${'EUR'} | ${'en'}
    ${'product 3'} | ${210}  | ${5.5} | ${true}     | ${199}  | ${11}  | ${210}  | ${'EUR'} | ${'en'}
    ${'product 4'} | ${199}  | ${5.5} | ${false}    | ${199}  | ${11}  | ${210}  | ${'EUR'} | ${'en'}
  `(
    'should have "$defaultLocale" $name costs $amount and $rate% includes tva($includedVAT) ($HT, $TVA, $TTC) $currency',
    ({ name, amount, rate, includedVAT, HT, TVA, TTC, currency, defaultLocale }) => {
      const currencyObj = new Currency(currency, 2, true, defaultLocale)
      const rateObj = new VAT(rate, 3, defaultLocale)
      const price = new Price(amount, rateObj, currencyObj, includedVAT, defaultLocale, 3)
      checkProduct(name, amount, rate, currency, includedVAT, HT, TVA, TTC, defaultLocale)
      checkProduct(name, amount, rate, currencyObj, includedVAT, HT, TVA, TTC, defaultLocale)
      checkProduct(name, amount, rateObj, currency, includedVAT, HT, TVA, TTC, defaultLocale)
      checkProduct(name, amount, rateObj, currencyObj, includedVAT, HT, TVA, TTC, defaultLocale)
      checkProduct(name, price, rateObj, currencyObj, includedVAT, HT, TVA, TTC, defaultLocale)
    }
  )
})
