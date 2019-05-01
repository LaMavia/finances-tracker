import React, { ReactChild } from 'react'
import { Link } from 'react-router-dom'
interface P {
  children?: ReactChild
  route_string: string
  route_title?: string
}

export const Subsite = ({ children, route_string, route_title }: P) => {
  return (
    <div className="subsite">
      <article className="card tile yellow">
        <Link to="/">
          <p className="card__route">{route_string}</p>
          {route_title && <h1 className="card__name">{route_title}</h1>}
        </Link>
      </article>
      <section className="index index--subsite">{children}</section>
    </div>
  )
}
