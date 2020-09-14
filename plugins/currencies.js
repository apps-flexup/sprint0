export const convert = async (fromCurrency, toCurrency, amount) => {
  if (fromCurrency === toCurrency) {
    return amount
  } else {
    let currencyApiUrl = 'https://api.exchangerate.host/convert?'
    currencyApiUrl += 'amount=' + amount
    currencyApiUrl += '&from=' + fromCurrency
    currencyApiUrl += '&to=' + toCurrency
    let res = await fetch(currencyApiUrl)
    res = await res.json()
    return res.result
  }
}
