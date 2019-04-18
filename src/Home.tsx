import React, { ReactElement, useState } from "react"

export const Home = (): ReactElement => {

  const [clicks, setClicks] = useState(0)

  return (
    <div>
      <h1>Hello from the SSR!</h1>
      <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
    </div>
  )
}

// Every view has to export default it's ReactElement
export default <Home/>