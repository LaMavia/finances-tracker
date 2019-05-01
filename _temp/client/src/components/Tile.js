"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
exports.Tile = ({ title, color, children, href }) => {
    return (react_1.default.createElement(react_router_dom_1.Link, { to: href, className: "tile", style: {
            '--color': color
        } },
        react_1.default.createElement("h2", { className: "tile__title" },
            title,
            ":"),
        react_1.default.createElement("div", { className: "tile__content" }, children)));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9UaWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUF3RDtBQUN4RCx1REFBd0M7QUFPM0IsUUFBQSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBSyxFQUFFLEVBQUU7SUFDMUQsT0FBTyxDQUNMLDhCQUFDLHVCQUFJLElBQ0gsRUFBRSxFQUFFLElBQUksRUFDUixTQUFTLEVBQUMsTUFBTSxFQUNoQixLQUFLLEVBQUU7WUFFTCxTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUVELHNDQUFJLFNBQVMsRUFBQyxhQUFhO1lBQUUsS0FBSztnQkFBTztRQUN6Qyx1Q0FBSyxTQUFTLEVBQUMsZUFBZSxJQUMzQixRQUFRLENBQ0wsQ0FDRCxDQUNSLENBQUE7QUFDSCxDQUFDLENBQUEifQ==