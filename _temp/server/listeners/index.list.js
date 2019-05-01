"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reactParser_1 = require("../reactParser");
exports.default = [
    [
        'GET', '/', async ({ res }) => {
            await reactParser_1.parser.render(res, '/');
        }
    ]
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9saXN0ZW5lcnMvaW5kZXgubGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGdEQUF3QztBQUV4QyxrQkFBZTtJQUNiO1FBQ0UsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1lBQzVCLE1BQU0sb0JBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQy9CLENBQUM7S0FDRjtDQUNxQixDQUFBIn0=