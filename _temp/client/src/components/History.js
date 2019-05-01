"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tile_1 = require("./Tile");
const react_1 = require("react");
const ArrowUp_1 = require("./ArrowUp");
const classes_1 = require("../helpers/classes");
const Item = ({ size, amount, name, formatter }) => (react_1.default.createElement("li", { className: classes_1.classes `tile__content__list__item tile__content__list__item--${size}`, style: {
        color: amount < 0 ? '#FF7474' : '#65EC96'
    } },
    react_1.default.createElement(ArrowUp_1.default, { className: classes_1.classes `tile__content__list__item__icon tile__content__list__item__icon--${amount < 0 ? 'neg' : 'pos'}` }),
    react_1.default.createElement("p", { className: "tile__content__list__item__amount" }, formatter.format(amount)),
    react_1.default.createElement("p", { className: "tile__content__list__item__name" }, name)));
exports.History = ({ formatter }) => {
    return (react_1.default.createElement(Tile_1.Tile, { href: "./", title: "History", color: "#535353" },
        react_1.default.createElement("ol", { className: "tile__content__list" },
            react_1.default.createElement(Item, { size: "small", amount: -100, name: "theatre", formatter: formatter }))));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9IaXN0b3J5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE2QjtBQUM3QixpQ0FBdUM7QUFDdkMsdUNBQWtDO0FBQ2xDLGdEQUE0QztBQVM1QyxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFhLEVBQUUsRUFBRSxDQUFDLENBQzdELHNDQUNFLFNBQVMsRUFBRSxpQkFBTyxDQUFBLHdEQUF3RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUU7UUFDdkYsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUztLQUMxQztJQUVELDhCQUFDLGlCQUFVLElBQ1QsU0FBUyxFQUFFLGlCQUFPLENBQUEsb0VBQ2hCLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FDdkIsRUFBRSxHQUNGO0lBQ0YscUNBQUcsU0FBUyxFQUFDLG1DQUFtQyxJQUM3QyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUN2QjtJQUNKLHFDQUFHLFNBQVMsRUFBQyxpQ0FBaUMsSUFBRSxJQUFJLENBQUssQ0FDdEQsQ0FDTixDQUFBO0FBTVksUUFBQSxPQUFPLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBSyxFQUFFLEVBQUU7SUFDMUMsT0FBTyxDQUNMLDhCQUFDLFdBQUksSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLFNBQVM7UUFDN0Msc0NBQUksU0FBUyxFQUFDLHFCQUFxQjtZQUNqQyw4QkFBQyxJQUFJLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLENBQ3JFLENBQ0EsQ0FDUixDQUFBO0FBQ0gsQ0FBQyxDQUFBIn0=