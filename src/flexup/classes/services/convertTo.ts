import axios from 'axios'

export default async (fromCurrency: string, toCurrency: string) => {
  const amount = 1
  const currencyApiUrl = `https://api.exchangerate.host/convert?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
  try {
    const data = await axios.get(currencyApiUrl, headers)
    return data.data.result
  } catch (e) {
    return 0
  }
}
