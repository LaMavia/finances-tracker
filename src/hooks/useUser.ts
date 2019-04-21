import { useState } from "react";
interface DispatchProps {
  item: "expense" 
    | "subsciption" 
    | "income"
  action: "add" | "delete",
  data: {
    [key: string]: any
  }
}

interface User {
  _id: string
  login: string
  balance: number
  last_online: string // UTC Datestring
  history: {
    item: "expense" | "income",
    title: string
    amount: number
    date: string // UTC Datestring
    time: string
  }[],
  subscriptions: {
    title: string
    frequency: number
    since: string // UTC Datestring
    last_pay: string // UTC Datestring
  }[]
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