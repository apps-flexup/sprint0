import { VAT } from './vat.class'

describe('VAT', () => {
  it('should create an instance by default', () => {
    const precision = 2
    const expectedValue = 0
    const expectedString = expectedValue.toLocaleString('fr', {
      style: 'percent',
      minimumSignificantDigits: precision
    })
    const result = new VAT()
    expect(result).toBeInstanceOf(VAT)
    expect(result).toBeDefined()
    expect(result.rate).toEqual(expectedValue)
    expect(result.value).toEqual(expectedValue)
    expect(result.toString()).toEqual(expectedString)
  })
  it('should create an instance with 5.50 % rate', () => {
    const precision = 3
    const expectedRate = 5.5
    const expectedValue = expectedRate / 100
    const locale = 'en'
    const expectedString = expectedValue.toLocaleString(locale, {
      style: 'percent',
      minimumSignificantDigits: precision
    })
    const result = new VAT(expectedRate, precision, locale)
    expect(result).toBeInstanceOf(VAT)
    expect(result).toBeDefined()
    expect(result.rate).toEqual(expectedRate)
    expect(result.value).toEqual(expectedValue)
    expect(result.toString()).toEqual(expectedString)
  })
  it('Should get an error when input negative number', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
      const _uselessVariable = new VAT(-20)
    } catch (error) {
      const expectedResult = new Error('Incorrect VAT rate')
      expect(error).toEqual(expectedResult)
    }
  })
  it('Should get an error when input an excessive VAT value', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
      const _uselessVariable = new VAT(101)
    } catch (error) {
      const expectedResult = new Error('Incorrect VAT rate')
      expect(error).toEqual(expectedResult)
    }
  })
  it('Should get an error when input an incorrect VAT precision low range', () => {
    const precision = -1
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
      const _uselessVariable = new VAT(5.5, precision)
    } catch (error) {
      const expectedResult = new Error('Incorrect VAT precision')
      expect(error).toEqual(expectedResult)
    }
  })
  it('Should get an error when input an incorrect VAT precision high range', () => {
    const precision = 10
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
      const _uselessVariable = new VAT(5.5, precision)
    } catch (error) {
      const expectedResult = new Error('Incorrect VAT precision')
      expect(error).toEqual(expectedResult)
    }
  })
})
