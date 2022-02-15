import { Currency } from './currency.class'

describe('Currency', () => {
  it('should create an instance by default to EUR', () => {
    const result = new Currency()
    expect(result).toBeInstanceOf(Currency)
    expect(result).toBeDefined()
  })
  it('should create an instance of USD', () => {
    const currency = 'USD'
    const expectedMinor = 2
    const result = new Currency(currency)
    expect(result.iso3).toEqual(currency)
    expect(result.minor).toEqual(expectedMinor)
    expect(result.active).toBeTruthy()
    expect(result).toBeDefined()
  })
  it('should create an instance of LEK', () => {
    const currency = 'LEK'
    const expectedMinor = 5
    const expectedActive = false
    const result = new Currency(currency, expectedMinor, expectedActive)
    expect(result.iso3).toEqual(currency)
    expect(result.minor).toEqual(expectedMinor)
    expect(result.active).toBeFalsy()
    expect(result).toBeDefined()
  })
  it('should raise an exception when minor less than 0', () => {
    const currency = 'CHF'
    const expectedMinor = -1
    const expectedActive = false
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _uselessVariable = new Currency(currency, expectedMinor, expectedActive)
    } catch (error) {
      const expectedError = new Error('Minor must be greater or equal to 0 and less or equal to 9')
      expect(error).toEqual(expectedError)
    }
  })
  it('should raise an exception when minor less than 0', () => {
    const currency = 'BGN'
    const expectedMinor = 10
    const expectedActive = false
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _uselessVariable = new Currency(currency, expectedMinor, expectedActive)
    } catch (error) {
      const expectedError = new Error('Minor must be greater or equal to 0 and less or equal to 9')
      expect(error).toEqual(expectedError)
    }
  })
  /*it('should return 1 if currencies are the same', () => {
    const currency = 'EUR'
    const currentCurrency = new Currency(currency)
    expect(currentCurrency.converTo(currency)).toEqual(1)
  })
  it('should return 1,13 if currencies are EUR / USD', () => {
    const currency = 'EUR'
    const destinationCurrency = 'USD'
    const currentCurrency = new Currency(currency)
    expect(currentCurrency.converTo(destinationCurrency)).toEqual(1)
  })*/
})
