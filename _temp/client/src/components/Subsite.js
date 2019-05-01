"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
exports.Subsite = ({ children, route_string, route_title }) => {
    return (react_1.default.createElement("div", { className: "subsite" },
        react_1.default.createElement("article", { className: "card tile yellow" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                react_1.default.createElement("p", { className: "card__route" }, route_string),
                route_title && react_1.default.createElement("h1", { className: "card__name" }, route_title))),
        react_1.default.createElement("section", { className: "index index--subsite" }, children)));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdWJzaXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUF5QztBQUN6Qyx1REFBdUM7QUFPMUIsUUFBQSxPQUFPLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFLLEVBQUUsRUFBRTtJQUNwRSxPQUFPLENBQ0wsdUNBQUssU0FBUyxFQUFDLFNBQVM7UUFDdEIsMkNBQVMsU0FBUyxFQUFDLGtCQUFrQjtZQUNuQyw4QkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBQyxHQUFHO2dCQUNWLHFDQUFHLFNBQVMsRUFBQyxhQUFhLElBQUUsWUFBWSxDQUFLO2dCQUM1QyxXQUFXLElBQUksc0NBQUksU0FBUyxFQUFDLFlBQVksSUFBRSxXQUFXLENBQU0sQ0FDeEQsQ0FDQztRQUNWLDJDQUFTLFNBQVMsRUFBQyxzQkFBc0IsSUFBRSxRQUFRLENBQVcsQ0FDMUQsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBIn0=