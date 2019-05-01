"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_list_1 = require("./index.list");
const login_list_1 = require("./login.list");
const register_list_1 = require("./register.list");
exports.default = (flow) => {
    for (const r of index_list_1.default.concat(login_list_1.default, register_list_1.default))
        flow.enslave(...r);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvbGlzdGVuZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTZCO0FBQzdCLDZDQUE2QjtBQUM3QixtREFBZ0M7QUFHaEMsa0JBQWUsQ0FBQyxJQUFVLEVBQUUsRUFBRTtJQUM1QixLQUFJLE1BQU0sQ0FBQyxJQUFJLG9CQUFFLENBQUMsTUFBTSxDQUFDLG9CQUFFLEVBQUUsdUJBQUUsQ0FBQztRQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUN0RCxDQUFDLENBQUEifQ==