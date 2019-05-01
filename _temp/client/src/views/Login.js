"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Subsite_1 = require("../components/Subsite");
const Register_1 = require("./Register");
exports.Login = () => {
    const [user, setUser] = react_1.useState({});
    const onChange = (field) => (e) => {
        setUser(Object.assign({}, user, { [field]: e.target.value }));
    };
    const onSubmit = (e) => { };
    return (react_1.default.createElement(Subsite_1.Subsite, { route_string: "Login", route_title: "Finances Tracker" },
        react_1.default.createElement("form", { onSubmit: onSubmit, action: "./", method: "POST", className: "form" },
            react_1.default.createElement(Register_1.FormInput, { onChange: onChange('login'), title: "Login", type: "text", placeholder: "Login" }),
            react_1.default.createElement(Register_1.FormInput, { onChange: onChange('password'), title: "Password", type: "password", placeholder: "Password" }),
            react_1.default.createElement("input", { type: "submit", className: "form__submit", value: "Login" }),
            react_1.default.createElement("p", { className: "form__sub-text" },
                "Don't have an account?",
                react_1.default.createElement("br", null),
                react_1.default.createElement("a", { href: "/register", className: "form__sub-text__link" }, "Register Here!")))));
};
exports.default = {
    component: exports.Login,
    path: '/login'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL3ZpZXdzL0xvZ2luLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFnRTtBQUVoRSxtREFBK0M7QUFDL0MseUNBQXNDO0FBRXpCLFFBQUEsS0FBSyxHQUFHLEdBQWlCLEVBQUU7SUFDdEMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxnQkFBUSxDQUFDLEVBQXVDLENBQUMsQ0FBQTtJQUN6RSxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFZLEVBQUUsRUFBRTtRQUNuRCxPQUFPLG1CQUNGLElBQUksSUFFUCxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUN2QixDQUFBO0lBQ0osQ0FBQyxDQUFBO0lBQ0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFZLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQTtJQUNyQyxPQUFPLENBQ0wsOEJBQUMsaUJBQU8sSUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxrQkFBa0I7UUFDMUQsd0NBQU0sUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLE1BQU07WUFDbEUsOEJBQUMsb0JBQVMsSUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsT0FBTyxHQUFHO1lBQ3hGLDhCQUFDLG9CQUFTLElBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLFVBQVUsR0FBRztZQUNyRyx5Q0FBTyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLE9BQU8sR0FBRztZQUM5RCxxQ0FBRyxTQUFTLEVBQUMsZ0JBQWdCOztnQkFFM0IseUNBQU07Z0JBQ04scUNBQUcsSUFBSSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsc0JBQXNCLHFCQUVoRCxDQUNGLENBQ0MsQ0FDQyxDQUNYLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZTtJQUNiLFNBQVMsRUFBRSxhQUFLO0lBQ2hCLElBQUksRUFBRSxRQUFRO0NBQ0QsQ0FBQSJ9