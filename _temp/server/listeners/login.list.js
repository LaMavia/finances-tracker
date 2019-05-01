"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
const bcrypt_1 = require("bcrypt");
const reactParser_1 = require("../reactParser");
const database_1 = require("../database");
exports.default = [
    [
        'GET', '/login', async ({ req, res }) => {
            await reactParser_1.parser.render(res, "/login");
        }
    ],
    [
        'POST', '/login', async ({ req, res }) => {
            let { login, password } = req.body;
            const users = await database_1.database.get({
                users: {
                    login,
                }
            });
            const user = users.find((u) => bcrypt_1.default.compareSync(password, u.password));
            if (user) {
                res.send(new users_1.User(user), {
                    'Content-Type': 'application/json'
                });
                return void 0;
            }
            else {
                res.send(null, {
                    status: 404,
                    message: 'user not found'
                });
                return {
                    error: new Error("User not found")
                };
            }
        }
    ]
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9saXN0ZW5lcnMvbG9naW4ubGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5RDtBQUN6RCxtQ0FBMkI7QUFFM0IsZ0RBQXdDO0FBQ3hDLDBDQUF1QztBQUV2QyxrQkFBZTtJQUNiO1FBQ0UsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBRTtZQUNwQyxNQUFNLG9CQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNwQyxDQUFDO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBeUMsQ0FBQTtZQUV2RSxNQUFNLEtBQUssR0FBVSxNQUFNLG1CQUFRLENBQUMsR0FBRyxDQUFDO2dCQUN0QyxLQUFLLEVBQUU7b0JBQ0wsS0FBSztpQkFDTjthQUNGLENBQUMsQ0FBQTtZQUVGLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRSxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtZQUUvRSxJQUFHLElBQUksRUFBRTtnQkFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN2QixjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQyxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxLQUFLLENBQUMsQ0FBQTthQUNkO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLE1BQU0sRUFBRSxHQUFHO29CQUNYLE9BQU8sRUFBRSxnQkFBZ0I7aUJBQzFCLENBQUMsQ0FBQTtnQkFDRixPQUFPO29CQUNMLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDWixDQUFBO2FBQ3pCO1FBQ0gsQ0FBQztLQUNGO0NBQ3FCLENBQUEifQ==