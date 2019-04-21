import lc from 'locale-currency'

export let lang = () => {
  try {
    return navigator.language || "en-EN"
  } catch (err) {
    return "en-EN"
  }
}

export const formatter = (() => {
  const c_code = lang() || "en-EN"
  const c_got = lc.getCurrency(c_code) || "USD"
  return Intl.NumberFormat(
    lang(), {
    currency: c_got,
    style: 'currency'
  })
})()