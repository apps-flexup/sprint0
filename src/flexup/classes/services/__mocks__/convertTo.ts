const fakeData = 1.13217

export default async (_fromCurrency: string, _toCurrency: string) => {
  return await new Promise((resolve) => resolve(fakeData))
}
