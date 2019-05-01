"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
class HistoryItem {
    constructor({ item, title, amount }) {
        this.item = item;
        this.title = title;
        this.amount = amount;
        this.date = new Date().toUTCString();
    }
}
exports.HistoryItem = HistoryItem;
class Subscription {
    constructor({ title, cost, frequency }) {
        this.title = title;
        this.cost = cost;
        this.frequency = frequency;
        this.since = new Date().toUTCString();
        this.last_pay = new Date().toUTCString();
    }
}
exports.Subscription = Subscription;
class User {
    constructor({ _id, login, balance, last_online, history, subscriptions }) {
        this._id = _id;
        this.login = login;
        this.balance = balance;
        this.last_online = last_online;
        this.history = history;
        this.subscriptions = subscriptions;
    }
}
exports.User = User;
class users {
    constructor({ login, password, email }) {
        this.login = login;
        this.password = bcrypt_1.default.hashSync(password, 10);
        this.email = email;
        this.last_online = new Date().toUTCString();
        this.balance = 0;
        this.history = [];
        this.subscriptions = [];
    }
}
exports.users = users;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTJCO0FBUTNCLE1BQWEsV0FBVztJQU10QixZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9CO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUN0QyxDQUFDO0NBQ0Y7QUFaRCxrQ0FZQztBQU9ELE1BQWEsWUFBWTtJQU92QixZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQXFCO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDMUMsQ0FBQztDQUNGO0FBZEQsb0NBY0M7QUFLRCxNQUFhLElBQUk7SUFRZixZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWdCO1FBQ3BGLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7SUFDcEMsQ0FBQztDQUNGO0FBaEJELG9CQWdCQztBQWVELE1BQWEsS0FBSztJQVNoQixZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWE7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQWxCRCxzQkFrQkMifQ==