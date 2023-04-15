const CURRENCY_FORMATTER = new Intl.NumberFormat('pl', {
    currency: "PLN",
    style: "currency",
    currencyDisplay: 'narrowSymbol'
  })
  
  export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
  }