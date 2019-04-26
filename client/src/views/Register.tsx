import React, { ReactElement, Context, useState, FormEvent } from 'react'
import { ViewExport } from '../Root'
import { Subsite } from '../components/Subsite'
import { User, UserProps } from '../../server/models/users'
interface FIP {
  title: string
  type: string
  placeholder: string
  onChange: React.FormEventHandler
}
export const FormInput = ({ title, type, placeholder, onChange }: FIP) => (
  <div className="form__item">
    <label className="form__item__label" htmlFor="">
      {title}
    </label>
    <input
      onChange={onChange}
      className="form__item__input"
      placeholder={placeholder}
      type={type}
      name={title}
      id={title}
    />
  </div>
)

interface FD extends UserProps {
  repassword: string
}

export const Register = (): ReactElement => {
  const [user, setUser] = useState({
    email: '',
    login: '',
    password: '',
    repassword: ''
  } as FD)
  const onChange = (field: string) => (e: FormEvent) => {
    setUser({
      ...user,
      // @ts-ignore
      [field]: e.target.value
    })
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(user.password !== user.repassword) return alert("Passwords don't match")

    fetch(location.href, {
      body: JSON.stringify(user)
    }).then(res => res.json())
    .then(j => {
      if(!j.status) location.href = "/"
      else alert(JSON.stringify(j))
    })
    
  }

  return (
    <Subsite route_string="Register" route_title="Finances Tracker">
      <form onSubmit={onSubmit} action="./" method="POST" className="form">
        <FormInput
          onChange={onChange('login')}
          title="Login"
          type="text"
          placeholder="Login"
        />
        <FormInput
          onChange={onChange('password')}
          title="Password"
          type="password"
          placeholder="Password"
        />
        <FormInput
          onChange={onChange('repassword')}
          title="Repeat Password"
          type="password"
          placeholder="Repeat Password"
        />
        <FormInput
          onChange={onChange('email')}
          title="Email"
          type="email"
          placeholder="Email"
        />
        <input type="submit" className="form__submit" value="Register" />
        <p className="form__sub-text">
          Already have an account?
          <br />
          <a href="/login" className="form__sub-text__link">
            Login Here!
          </a>
        </p>
      </form>
    </Subsite>
  )
}

export default {
  component: Register,
  path: '/register'
} as ViewExport
