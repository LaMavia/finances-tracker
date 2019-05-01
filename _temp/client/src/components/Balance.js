"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tile_1 = require("./Tile");
const react_1 = require("react");
exports.Balance = ({ formatter }) => {
    const [balance, setBalance] = react_1.useState(0);
    return (react_1.default.createElement(Tile_1.Tile, { href: "./", title: "balance", color: "#65EC96" },
        react_1.default.createElement("p", { className: "tile__text--large" }, formatter.format(balance))));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9CYWxhbmNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE4QjtBQUM5QixpQ0FBd0M7QUFJM0IsUUFBQSxPQUFPLEdBQUcsQ0FBQyxFQUFDLFNBQVMsRUFBSSxFQUFFLEVBQUU7SUFDeEMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxnQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXpDLE9BQU8sQ0FDTCw4QkFBQyxXQUFJLElBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxTQUFTO1FBQzdDLHFDQUFHLFNBQVMsRUFBQyxtQkFBbUIsSUFDN0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDeEIsQ0FDQyxDQUNSLENBQUE7QUFDSCxDQUFDLENBQUEifQ==