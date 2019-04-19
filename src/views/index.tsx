import React, { ReactElement, useState } from "react"
import { ViewExport } from "../Root";

export const Index = (): ReactElement => {

  const [clicks, setClicks] = useState(0)

  return (
    <div>
      <h1>Hello from the SSR!</h1>
      <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
    </div>
  )
}

export default {
  component: Index,
  path: "/"
} as ViewExport