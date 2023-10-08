export const defaultFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2
})

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  // Has to be USD to not show currency name
  currency: 'USD'
})

export function myParseFloat(string) {
  return string === '' ? 0 : parseFloat(string)
}