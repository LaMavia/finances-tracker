import React, { useState } from 'react'
import SvgAdd from './Add'
import SvgArrowUp from './ArrowUp'
import SvgClear from './Clear'
import SvgCalendar from './Calendar'
import SvgLabel from './Label'

export const Nav = () => {
  const [open, setstate] = useState(false)

  return (
    <nav className={['nav', open ? 'nav--open' : ''].join(' ')}>
      <div onClick={() => open&&setstate(false)} className="nav__catch"></div>
      <button onClick={() => window.history.back()} className="ui__btn ui__btn--wide ui__btn--wide--left">
        <SvgArrowUp />
      </button>
      <div className="nav__burger">
        <button
          onClick={() => setstate(!open)}
          className={["ui__btn ui__btn--circular nav__burger__btn nav__burger__btn--master", open ? 'white gray-fill' : ''].join(' ')}
        >
          {!open ? <SvgAdd /> : <SvgClear />}
        </button>
        <button className="ui__btn ui__btn--circular nav__burger__btn nav__burger__btn--slave nav__burger__btn--slave--left red">
          <SvgLabel />
        </button>
        <button className="ui__btn ui__btn--circular nav__burger__btn nav__burger__btn--slave nav__burger__btn--slave--top blue">
          <SvgCalendar />
        </button>
        <button className="ui__btn ui__btn--circular nav__burger__btn nav__burger__btn--slave nav__burger__btn--slave--right green">
          <SvgAdd />
        </button>
      </div>
      <button onClick={() => window.history.forward()} className="ui__btn ui__btn--wide ui__btn--wide--right">
        <SvgArrowUp />
      </button>
    </nav>
  )
}
