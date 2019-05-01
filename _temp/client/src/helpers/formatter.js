"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locale_currency_1 = require("locale-currency");
exports.lang = () => {
    try {
        return navigator.language || "en-EN";
    }
    catch (err) {
        return "en-EN";
    }
};
exports.formatter = (() => {
    const c_code = exports.lang() || "en-EN";
    const c_got = locale_currency_1.default.getCurrency(c_code) || "USD";
    return Intl.NumberFormat(exports.lang(), {
        currency: c_got,
        style: 'currency'
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9oZWxwZXJzL2Zvcm1hdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFnQztBQUVyQixRQUFBLElBQUksR0FBRyxHQUFHLEVBQUU7SUFDckIsSUFBSTtRQUNGLE9BQU8sU0FBUyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUE7S0FDckM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sT0FBTyxDQUFBO0tBQ2Y7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUM3QixNQUFNLE1BQU0sR0FBRyxZQUFJLEVBQUUsSUFBSSxPQUFPLENBQUE7SUFDaEMsTUFBTSxLQUFLLEdBQUcseUJBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFBO0lBQzdDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FDdEIsWUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxVQUFVO0tBQ2xCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxFQUFFLENBQUEifQ==