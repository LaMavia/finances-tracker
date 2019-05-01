export interface HistoryItemProps {
    item: 'expense' | 'income';
    title: string;
    amount: number;
}
export declare class HistoryItem {
    item: 'expense' | 'income';
    title: string;
    amount: number;
    date: string;
    constructor({ item, title, amount }: HistoryItemProps);
}
export interface SubscriptionProps {
    title: string;
    cost: number;
    frequency: number;
}
export declare class Subscription {
    title: string;
    cost: number;
    frequency: number;
    since: string;
    last_pay: string;
    constructor({ title, cost, frequency }: SubscriptionProps);
}
export declare class User {
    _id: string;
    login: string;
    balance: number;
    last_online: string;
    history: HistoryItem[];
    subscriptions: Subscription[];
    constructor({ _id, login, balance, last_online, history, subscriptions }: User & users);
}
export interface User {
}
export interface UserProps {
    login: string;
    password: string;
    email: string;
}
export declare class users {
    login: string;
    password: string;
    email: string;
    balance: number;
    last_online: string;
    history: HistoryItem[];
    subscriptions: Subscription[];
    constructor({ login, password, email }: UserProps);
}
