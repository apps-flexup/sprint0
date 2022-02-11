import { Price } from './price.class'

describe('Price', () => {})
it.each`
  reference | rate   | included | HT      | TVA    | TTC     | Currency
  ${0}      | ${0}   | ${false} | ${0}    | ${0}   | ${0}    | ${'EUR'}
  ${0}      | ${0}   | ${true}  | ${0}    | ${0}   | ${0}    | ${'EUR'}
  ${210}    | ${5.5} | ${true}  | ${199}  | ${11}  | ${210}  | ${'EUR'}
  ${1000}   | ${20}  | ${false} | ${1000} | ${200} | ${1200} | ${'EUR'}
  ${800}    | ${5.5} | ${true}  | ${758}  | ${42}  | ${800}  | ${'EUR'}
`(
  'should have $reference and $rate% includes tva($included) ($HT, $TVA, $TTC) $Currency',
  ({ reference, rate, included, HT, TVA, TTC, Currency }) => {
    const localeExpectedResult = 'fr'
    const result = new Price(reference, rate, Currency, included, localeExpectedResult)
    const currency = 'EUR'
    const facteur = 100
    const precision = 3
    const expectedStringResultHT = (HT / facteur).toLocaleString(localeExpectedResult, {
      style: 'currency',
      currency,
      minimumSignificantDigits: precision,
    })
    const expectedStringResultVAT = (TVA / facteur).toLocaleString(localeExpectedResult, {
      style: 'currency',
      currency,
      minimumSignificantDigits: precision,
    })
    const expectedStringResultTTC = (TTC / facteur).toLocaleString(localeExpectedResult, {
      style: 'currency',
      currency,
      minimumSignificantDigits: precision,
    })
    const expectedStringVAT = (rate / 100).toLocaleString(localeExpectedResult, {
      style: 'percent',
      minimumSignificantDigits: precision,
    })
    expect(result).toBeInstanceOf(Price)
    expect(result).toBeDefined()
    expect(result.amount).toEqual(reference)
    expect(result.amountHT).toEqual(HT)
    expect(result.amountVAT).toEqual(TVA)
    expect(result.amountTTC).toEqual(TTC)
    expect(result.amountHTString).toEqual(expectedStringResultHT)
    expect(result.amountVATString).toEqual(expectedStringResultVAT)
    expect(result.amountTTCString).toEqual(expectedStringResultTTC)
    expect(result.vatString).toEqual(expectedStringVAT)
  },
)
