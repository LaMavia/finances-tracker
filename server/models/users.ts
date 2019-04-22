import bcrypt from "bcrypt"

export interface HistoryItemProps {
  item: 'expense' | 'income'
  title: string
  amount: number
}

export class HistoryItem {
  item: 'expense' | 'income'
  title: string
  amount: number
  date: string // UTC Datestring

  constructor({ item, title, amount }: HistoryItemProps) {
    this.item = item
    this.title = title
    this.amount = amount
    this.date = new Date().toUTCString()
  }
}
export interface SubscriptionProps {
  title: string
  cost: number
  frequency: number
}

export class Subscription {
  title: string
  cost: number
  frequency: number
  since: string // UTC Datestring
  last_pay: string // UTC Datestring

  constructor({ title, cost, frequency }: SubscriptionProps) {
    this.title = title
    this.cost = cost
    this.frequency = frequency
    this.since = new Date().toUTCString()
    this.last_pay = new Date().toUTCString()
  }
}

/**
 * A version of the User model sent do the client
 */
export class User {
  _id: string
  login: string
  balance: number
  last_online: string // UTC Datestring
  history: HistoryItem[]
  subscriptions: Subscription[]

  constructor({ _id, login, balance, last_online, history, subscriptions }: User & users) {
    this._id = _id
    this.login = login
    this.balance = balance
    this.last_online = last_online
    this.history = history
    this.subscriptions = subscriptions
  }
}

export interface User {
  
}

export interface UserProps {
  login: string
  password: string
  email: string
}

/**
 * A version of the User model stored in the database
 */
export class users {
  login: string
  password: string
  email: string
  balance: number
  last_online: string // UTC Datestring
  history: HistoryItem[]
  subscriptions: Subscription[]

  constructor({ login, password, email }: UserProps) {
    this.login = login
    this.password = bcrypt.hashSync(password, 10) 
    this.email = email
    this.last_online = new Date().toUTCString()
    this.balance = 0
    this.history = []
    this.subscriptions = []
  }
}
