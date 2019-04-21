import React, { ReactChild } from "react"

interface P { 
  children?: ReactChild
  route_string: string
  route_title?: string
}

export const Subsite = ({ children, route_string, route_title }: P) => {
  return (
    <div>
      <article className="card">
        <p className="card__route">{route_string}</p>
        {
          route_title && (<h1 className="card__name">{ route_title }</h1>)
        }
      </article>
      <section className="index">
        {children}
      </section>
    </div>
  )
}