import React, { ReactElement, FormEvent, useState } from 'react'
import { ViewExport } from '../Root'
import { Subsite } from '../components/Subsite'
import { FormInput } from './Register'

export const Login = (): ReactElement => {
  const [user, setUser] = useState({} as {login: string, password: string})
  const onChange = (field: string) => (e: FormEvent) => {
    setUser({
      ...user,
      // @ts-ignore
      [field]: e.target.value
    })
  }
  const onSubmit = (e: FormEvent) => {}
  return (
    <Subsite route_string="Login" route_title="Finances Tracker">
      <form onSubmit={onSubmit} action="./" method="POST" className="form">
        <FormInput onChange={onChange('login')} title="Login" type="text" placeholder="Login" />
        <FormInput onChange={onChange('password')} title="Password" type="password" placeholder="Password" />
        <input type="submit" className="form__submit" value="Login" />
        <p className="form__sub-text">
          Don't have an account?
          <br />
          <a href="/register" className="form__sub-text__link">
            Register Here!
          </a>
        </p>
      </form>
    </Subsite>
  )
}

export default {
  component: Login,
  path: '/login'
} as ViewExport
