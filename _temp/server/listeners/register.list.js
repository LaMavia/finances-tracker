"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
const bcrypt_1 = require("bcrypt");
const reactParser_1 = require("../reactParser");
const database_1 = require("../database");
exports.default = [
    ['GET', '/register', async ({ req, res }) => {
            await reactParser_1.parser.render(res, '/register');
        }],
    ['POST', '/register', async ({ req, res }) => {
            let { email, login, password } = req.body;
            const used = await isUsed(login, email);
            console.log(used);
            if (used) {
                res.writeHead(409, `Credencial(s): ${used} already exist`);
                return;
            }
            password = await bcrypt_1.default.hash(password, 10);
            const db_res = await database_1.database.create(users_1.users, req.body);
            console.dir(db_res, { colors: true, depth: 3 });
            if (db_res.result.ok && db_res.result.n === 1) {
                await res.send(await database_1.database.get({
                    users: {
                        login,
                    }
                }));
                return void 0;
            }
            else {
                await res.send({
                    status: 406,
                    message: "Error during registration despite correct crudentials"
                });
                return {
                    error: new Error("Server-db error")
                };
            }
        }]
];
async function isUsed(login, email) {
    debugger;
    const res = await database_1.database.get({
        users: {
            $or: [
                { login }, { email }
            ]
        }
    });
    let [l, em] = [false, false];
    for (let i = 0; i < res.length, !l || !em; i++) {
        if (!l && res[i].login === login)
            l = true;
        if (!em && res[i].email === email)
            em = true;
    }
    return l && em
        ? 'both'
        : (l ? 'login' : (em ? 'email' : null));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIubGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9saXN0ZW5lcnMvcmVnaXN0ZXIubGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtRDtBQUNuRCxtQ0FBMkI7QUFFM0IsZ0RBQXFEO0FBQ3JELDBDQUF1QztBQUV2QyxrQkFBZTtJQUNiLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUMxQyxNQUFNLG9CQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUM7SUFDRixDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQWlCLENBQUE7WUFDcEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsSUFBRyxJQUFJLEVBQUU7Z0JBQ1AsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLElBQUksZ0JBQWdCLENBQUMsQ0FBQTtnQkFDMUQsT0FBTTthQUNQO1lBRUQsUUFBUSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxNQUFNLENBQUMsYUFBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUE7WUFFN0MsSUFBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzVDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLG1CQUFRLENBQUMsR0FBRyxDQUFDO29CQUNoQyxLQUFLLEVBQUU7d0JBQ0wsS0FBSztxQkFDTjtpQkFDRixDQUFDLENBQUMsQ0FBQTtnQkFDSCxPQUFPLEtBQUssQ0FBQyxDQUFBO2FBQ2Q7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNiLE1BQU0sRUFBRSxHQUFHO29CQUNYLE9BQU8sRUFBRSx1REFBdUQ7aUJBQ2pFLENBQUMsQ0FBQTtnQkFDRixPQUFPO29CQUNMLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztpQkFDcEMsQ0FBQTthQUNGO1FBQ0wsQ0FBQyxDQUFDO0NBQ29CLENBQUE7QUFFeEIsS0FBSyxVQUFVLE1BQU0sQ0FBQyxLQUFhLEVBQUUsS0FBYTtJQUNoRCxRQUFRLENBQUE7SUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLG1CQUFRLENBQUMsR0FBRyxDQUFDO1FBQzdCLEtBQUssRUFBRTtZQUNMLEdBQUcsRUFBRTtnQkFDSCxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDO2FBQ2pCO1NBQ0Y7S0FDRixDQUFZLENBQUE7SUFDYixJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzVCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdDLElBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLO1lBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQTtRQUN6QyxJQUFHLENBQUMsRUFBRSxJQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSztZQUFFLEVBQUUsR0FBRyxJQUFJLENBQUE7S0FDM0M7SUFFRCxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ1osQ0FBQyxDQUFDLE1BQU07UUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDZixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNwQixDQUFDLENBQUE7QUFDTixDQUFDIn0=