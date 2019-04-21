import React, { ReactChildren, ReactChild } from 'react'
import { Link } from 'react-router-dom';
interface P { 
  title: string
  color: string
  children?: ReactChild
  href: string
}
export const Tile = ({ title, color, children, href }: P) => {
  return (
    <Link
      to={href}
      className="tile"
      style={{
        // @ts-ignore
        '--color': color
      }}
    >
      <h2 className="tile__title">{title}:</h2>
      <div className="tile__content">
        {children}
      </div>
    </Link>
  )
}
