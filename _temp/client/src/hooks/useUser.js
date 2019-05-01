"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const fixHref = (s) => s.replace(/\/$/, '');
exports.useUser = (userID) => {
    const [user, setUser] = react_1.useState(null);
    const dispatch = ({ item, action, data }) => {
        fetch(`${fixHref(location.href)}/${item}`, {
            body: JSON.stringify({
                action, data
            })
        });
    };
    return [user, dispatch];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvaG9va3MvdXNlVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFpQztBQVdqQyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFFdEMsUUFBQSxPQUFPLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtJQUV4QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFdEMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFpQixFQUFFLEVBQUU7UUFDekQsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUN6QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDO1NBQ0gsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFBO0lBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUN6QixDQUFDLENBQUEifQ==