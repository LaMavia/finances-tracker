import { Tile } from './Tile'
import React, { useState } from 'react'
import SvgArrowUp from './ArrowUp'
import { classes } from '../helpers/classes'
import { useUser } from '../hooks/useUser'
import { Link } from 'react-router-dom'

interface ItemProps {
  size: 'small' | 'med' | 'large'
  amount: number
  name: string
  formatter: Intl.NumberFormat
  id: string
}
const Item = ({ size, amount, name, formatter, id }: ItemProps) => (
  <li>
    <Link
      to={`/history/${id}`}
      className={classes`tile__content__list__item tile__content__list__item--${size}`}
      style={{
        color: amount < 0 ? '#FF7474' : '#65EC96',
      }}
    >
      <SvgArrowUp
        className={classes`tile__content__list__item__icon tile__content__list__item__icon--${
          amount < 0 ? 'neg' : 'pos'
        }`}
      />
      <p className="tile__content__list__item__amount">
        {formatter.format(amount)}
      </p>
      <p className="tile__content__list__item__name">{name}</p>
    </Link>
  </li>
)

interface P {
  formatter: Intl.NumberFormat
}

export const History = ({ formatter }: P) => {
  return (
    <Tile href="./" title="History" color="#535353">
      <ol className="tile__content__list">
        <Item
          size="small"
          amount={-100}
          name="theatre"
          formatter={formatter}
          id="9027352fd"
        />
      </ol>
    </Tile>
  )
}
/**
 * [
      'tile__content__list__item',
      `tile__content__list__item--${size}`,
    ].join(' ')
 */
