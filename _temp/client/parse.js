"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_extra_1 = require("fs-extra");
fs_extra_1.default.readdir("./to_parse/")
    .then(fnames => fnames.filter(n => /\.svg$/.test(n)))
    .then(fnames => fnames.map(n => {
    child_process_1.default.exec(`npx @svgr/cli --icon --ext tsx --expand-props end ./to_parse/${n} --out-dir ./src/components/`, (err, out) => {
        if (err)
            console.error(err);
        else
            console.log(out);
    });
}))
    .catch(console.error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jbGllbnQvcGFyc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBOEI7QUFDOUIsdUNBQXlCO0FBRXpCLGtCQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztLQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDYix1QkFBRSxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNwSCxJQUFHLEdBQUc7WUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBOztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQ0g7S0FDQSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBIn0=