"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const RD = require("react-router-dom");
const RS = require("react-router");
const react_router_dom_1 = require("react-router-dom");
const react_router_1 = require("react-router");
const index_1 = require("./views/index");
const Nav_1 = require("./components/Nav");
const Income_1 = require("./views/Income");
const Register_1 = require("./views/Register");
const Login_1 = require("./views/Login");
exports.default = (context, { context: ctx, location } = {
    context: {},
    location: '/'
}) => {
    const routes = [Login_1.default, Register_1.default, Income_1.default, index_1.default];
    let render;
    if (context === 'Client')
        render = function () {
            return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(Nav_1.Nav, null),
                react_1.default.createElement(RD.Switch, { children: routes.map(route => react_1.default.createElement(RD.Route, Object.assign({}, route))) })));
        };
    else
        render = function () {
            return react_1.default.createElement(react_router_1.StaticRouter, { location: location, context: ctx },
                react_1.default.createElement(Nav_1.Nav, null),
                react_1.default.createElement(RS.Switch, { children: routes.map(route => react_1.default.createElement(RS.Route, Object.assign({}, route))) }));
        };
    return class Root extends (react_1.default || global.React).Component {
        constructor(props) {
            super(props);
            this.render = render.bind(this);
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUm9vdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBZ0U7QUFDaEUsdUNBQXNDO0FBQ3RDLG1DQUFrQztBQUNsQyx1REFBZ0Q7QUFDaEQsK0NBSXFCO0FBQ3JCLHlDQUFpQztBQUNqQywwQ0FBdUM7QUFDdkMsMkNBQW9DO0FBQ3BDLCtDQUF3QztBQUN4Qyx5Q0FBa0M7QUFpQmxDLGtCQUFlLENBQ2IsT0FBNEIsRUFDNUIsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsS0FBa0I7SUFDeEMsT0FBTyxFQUFFLEVBQUU7SUFDWCxRQUFRLEVBQUUsR0FBRztDQUNkLEVBQ0QsRUFBRTtJQUVGLE1BQU0sTUFBTSxHQUFHLENBQUMsZUFBSyxFQUFFLGtCQUFRLEVBQUUsZ0JBQU0sRUFBRSxlQUFLLENBQWlCLENBQUE7SUFHL0QsSUFBSSxNQUErQyxDQUFBO0lBQ25ELElBQUksT0FBTyxLQUFLLFFBQVE7UUFDdEIsTUFBTSxHQUFHO1lBQ1AsT0FBTyxDQUNMLDhCQUFDLGdDQUFhO2dCQUNaLDhCQUFDLFNBQUcsT0FBRTtnQkFDTiw4QkFBQyxFQUFFLENBQUMsTUFBTSxJQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsOEJBQUMsRUFBRSxDQUFDLEtBQUssb0JBQUssS0FBSyxFQUFJLENBQUMsR0FBRyxDQUN0RCxDQUNqQixDQUFBO1FBQ0gsQ0FBQyxDQUFBOztRQUVELE1BQU0sR0FBRztZQUNQLE9BQU8sOEJBQUMsMkJBQVksSUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHO2dCQUNuRCw4QkFBQyxTQUFHLE9BQUU7Z0JBQ04sOEJBQUMsRUFBRSxDQUFDLE1BQU0sSUFBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLDhCQUFDLEVBQUUsQ0FBQyxLQUFLLG9CQUFLLEtBQUssRUFBSSxDQUFDLEdBQUcsQ0FDdkQsQ0FBQTtRQUNqQixDQUFDLENBQUE7SUFHSCxPQUFPLE1BQU0sSUFBSyxTQUFRLENBQUMsZUFBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTO1FBQ3pELFlBQVksS0FBVTtZQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUNGLENBQUE7QUFDSCxDQUFDLENBQUEifQ==