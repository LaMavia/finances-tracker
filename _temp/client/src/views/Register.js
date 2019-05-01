"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Subsite_1 = require("../components/Subsite");
exports.FormInput = ({ title, type, placeholder, onChange }) => (react_1.default.createElement("div", { className: "form__item" },
    react_1.default.createElement("label", { className: "form__item__label", htmlFor: "" }, title),
    react_1.default.createElement("input", { onChange: onChange, className: "form__item__input", placeholder: placeholder, type: type, name: title, id: title })));
exports.Register = () => {
    const [user, setUser] = react_1.useState({
        email: '',
        login: '',
        password: '',
        repassword: ''
    });
    const onChange = (field) => (e) => {
        setUser(Object.assign({}, user, { [field]: e.target.value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (user.password !== user.repassword)
            return alert("Passwords don't match");
        fetch(location.href, {
            body: JSON.stringify(user),
            method: "POST"
        }).then(res => res.json())
            .then(j => {
            if (!j.status)
                location.href = "/";
            else
                alert(JSON.stringify(j));
        });
    };
    return (react_1.default.createElement(Subsite_1.Subsite, { route_string: "Register", route_title: "Finances Tracker" },
        react_1.default.createElement("form", { onSubmit: onSubmit, action: "./", method: "POST", className: "form" },
            react_1.default.createElement(exports.FormInput, { onChange: onChange('login'), title: "Login", type: "text", placeholder: "Login" }),
            react_1.default.createElement(exports.FormInput, { onChange: onChange('password'), title: "Password", type: "password", placeholder: "Password" }),
            react_1.default.createElement(exports.FormInput, { onChange: onChange('repassword'), title: "Repeat Password", type: "password", placeholder: "Repeat Password" }),
            react_1.default.createElement(exports.FormInput, { onChange: onChange('email'), title: "Email", type: "email", placeholder: "Email" }),
            react_1.default.createElement("input", { type: "submit", className: "form__submit", value: "Register" }),
            react_1.default.createElement("p", { className: "form__sub-text" },
                "Already have an account?",
                react_1.default.createElement("br", null),
                react_1.default.createElement("a", { href: "/login", className: "form__sub-text__link" }, "Login Here!")))));
};
exports.default = {
    component: exports.Register,
    path: '/register'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL3ZpZXdzL1JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUF5RTtBQUV6RSxtREFBK0M7QUFRbEMsUUFBQSxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUN4RSx1Q0FBSyxTQUFTLEVBQUMsWUFBWTtJQUN6Qix5Q0FBTyxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsT0FBTyxFQUFDLEVBQUUsSUFDNUMsS0FBSyxDQUNBO0lBQ1IseUNBQ0UsUUFBUSxFQUFFLFFBQVEsRUFDbEIsU0FBUyxFQUFDLG1CQUFtQixFQUM3QixXQUFXLEVBQUUsV0FBVyxFQUN4QixJQUFJLEVBQUUsSUFBSSxFQUNWLElBQUksRUFBRSxLQUFLLEVBQ1gsRUFBRSxFQUFFLEtBQUssR0FDVCxDQUNFLENBQ1AsQ0FBQTtBQU1ZLFFBQUEsUUFBUSxHQUFHLEdBQWlCLEVBQUU7SUFDekMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxnQkFBUSxDQUFDO1FBQy9CLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxFQUFFO0tBQ1QsQ0FBQyxDQUFBO0lBQ1IsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBWSxFQUFFLEVBQUU7UUFDbkQsT0FBTyxtQkFDRixJQUFJLElBRVAsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFDdkIsQ0FBQTtJQUNKLENBQUMsQ0FBQTtJQUNELE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBWSxFQUFFLEVBQUU7UUFDaEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ2xCLElBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU8sS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFFM0UsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzFCLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUixJQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07Z0JBQUUsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUE7O2dCQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQyxDQUFBO0lBRUQsT0FBTyxDQUNMLDhCQUFDLGlCQUFPLElBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsa0JBQWtCO1FBQzdELHdDQUFNLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxNQUFNO1lBQ2xFLDhCQUFDLGlCQUFTLElBQ1IsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDM0IsS0FBSyxFQUFDLE9BQU8sRUFDYixJQUFJLEVBQUMsTUFBTSxFQUNYLFdBQVcsRUFBQyxPQUFPLEdBQ25CO1lBQ0YsOEJBQUMsaUJBQVMsSUFDUixRQUFRLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM5QixLQUFLLEVBQUMsVUFBVSxFQUNoQixJQUFJLEVBQUMsVUFBVSxFQUNmLFdBQVcsRUFBQyxVQUFVLEdBQ3RCO1lBQ0YsOEJBQUMsaUJBQVMsSUFDUixRQUFRLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUNoQyxLQUFLLEVBQUMsaUJBQWlCLEVBQ3ZCLElBQUksRUFBQyxVQUFVLEVBQ2YsV0FBVyxFQUFDLGlCQUFpQixHQUM3QjtZQUNGLDhCQUFDLGlCQUFTLElBQ1IsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDM0IsS0FBSyxFQUFDLE9BQU8sRUFDYixJQUFJLEVBQUMsT0FBTyxFQUNaLFdBQVcsRUFBQyxPQUFPLEdBQ25CO1lBQ0YseUNBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBQyxVQUFVLEdBQUc7WUFDakUscUNBQUcsU0FBUyxFQUFDLGdCQUFnQjs7Z0JBRTNCLHlDQUFNO2dCQUNOLHFDQUFHLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLHNCQUFzQixrQkFFN0MsQ0FDRixDQUNDLENBQ0MsQ0FDWCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWU7SUFDYixTQUFTLEVBQUUsZ0JBQVE7SUFDbkIsSUFBSSxFQUFFLFdBQVc7Q0FDSixDQUFBIn0=