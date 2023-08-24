import mockAxios from 'jest-mock-axios'
import convertTo from './convertTo'

const expectedResult = {
  data: {
    result: 1.13217
  }
}

describe('ConvertTo', () => {
  afterEach(() => {
    mockAxios.reset()
  })
  it('should return the correct result', async () => {
    mockAxios.get.mockResolvedValueOnce(expectedResult)

    const rate = await convertTo('EUR', 'USD')
    expect(rate).toEqual(expectedResult.data.result)
  })
  it('should return 0 uf API not available', async () => {
    const message = 'Network Error'
    mockAxios.get.mockRejectedValueOnce(new Error(message))

    const rate = await convertTo('EUR', 'USD')
    expect(rate).toEqual(0)
  })
})
