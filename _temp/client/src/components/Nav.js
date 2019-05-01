"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Add_1 = require("./Add");
const ArrowUp_1 = require("./ArrowUp");
const Clear_1 = require("./Clear");
const Calendar_1 = require("./Calendar");
const Label_1 = require("./Label");
exports.Nav = () => {
    const [open, setstate] = react_1.useState(false);
    return (react_1.default.createElement("nav", { className: ['nav', open ? 'nav--open' : ''].join(' ') },
        react_1.default.createElement("div", { onClick: () => open && setstate(false), className: "nav__catch" }),
        react_1.default.createElement("button", { onClick: () => window.history.back(), className: "ui__btn ui__btn--wide ui__btn--wide--left" },
            react_1.default.createElement(ArrowUp_1.default, null)),
        react_1.default.createElement("div", { className: "nav__burger" },
            react_1.default.createElement("button", { onClick: () => setstate(!open), className: ["ui__btn ui__btn--circular nav__burger__btn nav__burger__btn--master", open ? 'white gray-fill' : ''].join(' ') }, !open ? react_1.default.createElement(Add_1.default, null) : react_1.default.createElement(Clear_1.default, null)),
            react_1.default.createElement("button", { className: "ui__btn ui__btn--circular nav__burger__btn nav__burger__btn--slave nav__burger__btn--slave--left red" },
                react_1.default.createElement(Label_1.default, null)),
            react_1.default.createElement("button", { className: "ui__btn ui__btn--circular nav__burger__btn nav__burger__btn--slave nav__burger__btn--slave--top blue" },
                react_1.default.createElement(Calendar_1.default, null)),
            react_1.default.createElement("button", { className: "ui__btn ui__btn--circular nav__burger__btn nav__burger__btn--slave nav__burger__btn--slave--right green" },
                react_1.default.createElement(Add_1.default, null))),
        react_1.default.createElement("button", { onClick: () => window.history.forward(), className: "ui__btn ui__btn--wide ui__btn--wide--right" },
            react_1.default.createElement(ArrowUp_1.default, null))));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL05hdi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBdUM7QUFDdkMsK0JBQTBCO0FBQzFCLHVDQUFrQztBQUNsQyxtQ0FBOEI7QUFDOUIseUNBQW9DO0FBQ3BDLG1DQUE4QjtBQUVqQixRQUFBLEdBQUcsR0FBRyxHQUFHLEVBQUU7SUFDdEIsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRXhDLE9BQU8sQ0FDTCx1Q0FBSyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDeEQsdUNBQUssT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFDLFlBQVksR0FBTztRQUN4RSwwQ0FBUSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUMsMkNBQTJDO1lBQ2pHLDhCQUFDLGlCQUFVLE9BQUcsQ0FDUDtRQUNULHVDQUFLLFNBQVMsRUFBQyxhQUFhO1lBQzFCLDBDQUNFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDOUIsU0FBUyxFQUFFLENBQUMscUVBQXFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUUxSCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsOEJBQUMsYUFBTSxPQUFHLENBQUMsQ0FBQyxDQUFDLDhCQUFDLGVBQVEsT0FBRyxDQUMzQjtZQUNULDBDQUFRLFNBQVMsRUFBQyxzR0FBc0c7Z0JBQ3RILDhCQUFDLGVBQVEsT0FBRyxDQUNMO1lBQ1QsMENBQVEsU0FBUyxFQUFDLHNHQUFzRztnQkFDdEgsOEJBQUMsa0JBQVcsT0FBRyxDQUNSO1lBQ1QsMENBQVEsU0FBUyxFQUFDLHlHQUF5RztnQkFDekgsOEJBQUMsYUFBTSxPQUFHLENBQ0gsQ0FDTDtRQUNOLDBDQUFRLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBQyw0Q0FBNEM7WUFDckcsOEJBQUMsaUJBQVUsT0FBRyxDQUNQLENBQ0wsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBIn0=