"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const locale_currency_1 = require("locale-currency");
const Balance_1 = require("../components/Balance");
const History_1 = require("../components/History");
let lang = () => {
    try {
        return navigator.language || "en-EN";
    }
    catch (err) {
        return "en-EN";
    }
};
const formatter = (() => {
    const c_code = lang() || "en-EN";
    const c_got = locale_currency_1.default ? locale_currency_1.default.getCurrency(c_code) || "USD" : "USD";
    return Intl.NumberFormat(lang(), {
        currency: c_got,
        style: 'currency'
    });
})();
exports.Index = () => {
    return (react_1.default.createElement("section", { className: "index" },
        react_1.default.createElement(Balance_1.Balance, { formatter: formatter }),
        react_1.default.createElement(History_1.History, { formatter: formatter })));
};
exports.default = {
    component: exports.Index,
    path: '/'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL3ZpZXdzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFxRDtBQUdyRCxxREFBZ0M7QUFDaEMsbURBQWdEO0FBQ2hELG1EQUFnRDtBQUVoRCxJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7SUFDZCxJQUFJO1FBQ0YsT0FBTyxTQUFTLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQTtLQUNyQztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxPQUFPLENBQUE7S0FDZjtBQUNILENBQUMsQ0FBQTtBQUVELE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ3RCLE1BQU0sTUFBTSxHQUFHLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQTtJQUNoQyxNQUFNLEtBQUssR0FBRyx5QkFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUMxRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUUsVUFBVTtLQUNsQixDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsRUFBRSxDQUFBO0FBQ1MsUUFBQSxLQUFLLEdBQUcsR0FBaUIsRUFBRTtJQUN0QyxPQUFPLENBQ0wsMkNBQVMsU0FBUyxFQUFDLE9BQU87UUFDeEIsOEJBQUMsaUJBQU8sSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFHO1FBQ2hDLDhCQUFDLGlCQUFPLElBQUMsU0FBUyxFQUFFLFNBQVMsR0FBRyxDQUN4QixDQUNYLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZTtJQUNiLFNBQVMsRUFBRSxhQUFLO0lBQ2hCLElBQUksRUFBRSxHQUFHO0NBQ0ksQ0FBQSJ9