import React, { ReactElement, useState } from 'react'
import { ViewExport } from '../Root'
import { Nav } from '../components/Nav'
import lc from 'locale-currency'
import { Balance } from '../components/Balance';

let lang = () => {
  try {
    return navigator.language || "en-EN"
  } catch (err) {
    return "en-EN"
  }
}

const formatter = (() => {
  const c_code = lang() || "en-EN"
  const c_got = lc.getCurrency(c_code) || "USD"
  return Intl.NumberFormat(
    lang(), {
    currency: c_got,
    style: 'currency'
  })
})()
export const Index = (): ReactElement => {
  return (
    <section className="index">
      <Balance formatter={formatter}/>
    </section>
  )
}

export default {
  component: Index,
  path: '/'
} as ViewExport
