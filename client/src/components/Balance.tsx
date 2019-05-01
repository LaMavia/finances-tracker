import { Tile } from "./Tile";
import React, { useState } from "react";
interface P {
  formatter: Intl.NumberFormat
}
export const Balance = ({formatter}: P) => {
  const [balance, setBalance] = useState(0)

  return (
    <Tile href="./" title="balance" color="#65EC96">
      <p className="tile__text--large">
        {formatter.format(balance)}
      </p>
    </Tile>
  )
}