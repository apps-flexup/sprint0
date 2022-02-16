import fetchMock from 'jest-fetch-mock'
import { Currency } from './currency.class'

describe('Currency', () => {

  beforeEach(() => {
    fetchMock.enableMocks()
  })

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
      const _uselessVariable: Currency = new Currency(currency, expectedMinor, expectedActive)
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
      const _uselessVariable: Currency = new Currency(currency, expectedMinor, expectedActive)
    } catch (error) {
      const expectedError = new Error('Minor must be greater or equal to 0 and less or equal to 9')
      expect(error).toEqual(expectedError)
    }
  })

  it('should return 1 if destination currency is void', async () => {
    const currency = 'EUR'
    const currentCurrency = new Currency(currency)
    const expectedResult = 1
    const result = await currentCurrency.convertTo()
    expect(result).toEqual(expectedResult)
  })

  it('should return 1 if currencies are the same', async () => {
    const currency = 'EUR'
    const currentCurrency = new Currency(currency)
    const expectedResult = 1
    const result = await currentCurrency.convertTo(currency)
    expect(result).toEqual(expectedResult)
  })

  it('should return 1.13 if currencies are EUR / USD', async () => {
    const fromCurrency = 'EUR'
    const destinationCurrency = 'USD'
    const expectedResult = {
      date: '2022-02-15',
      historical: false,
      info: {
        rate: 1.13217,
      },
      query: {
        amount: 1,
        from: fromCurrency,
        to: destinationCurrency,
      },
      result: 1.13217,
      success: true,
    }

    fetchMock.mockResponse(JSON.stringify(expectedResult))
    const currentCurrency = new Currency(fromCurrency)
    const result = currentCurrency.convertTo(destinationCurrency)
    expect(result).toEqual(expectedResult.result)
  })

  it.skip('should return 0 if currency request failed', async () => {
    const fromCurrency = 'EUR'
    const destinationCurrency = 'USD'

    global.fetch = jest.fn(() =>
      Promise.reject({
        json: () => Promise.resolve(''),
      }),
    ) as jest.Mock

    const currentCurrency = new Currency(fromCurrency)
    const result = currentCurrency.convertTo(destinationCurrency)
    expect(result).toEqual(0)
  })
})
