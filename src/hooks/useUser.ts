import { useState } from "react";
export interface DispatchProps {
  item: "expense" 
    | "subsciption" 
    | "income"
  action: "add" | "delete",
  data: {
    [key: string]: any
  }
}

const fixHref = (s: string) => s.replace(/\/$/, '')

export const useUser = (userID: string) => {

  const [user, setUser] = useState(null)

  const dispatch = ({ item, action, data }: DispatchProps) => {
    fetch(`${fixHref(location.href)}/${item}`, {
      body: JSON.stringify({
        action, data
      })
    })
  }

  return [user, dispatch]
}