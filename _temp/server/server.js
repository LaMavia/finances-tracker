"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reactParser_1 = require("./reactParser");
const server_1 = require("react-dom/server");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const river_flow_1 = require("river-flow");
const path_1 = require("path");
const listeners_1 = require("./listeners");
const dotenv_1 = require("dotenv");
global.React = react_1.default;
global.ReactDOM = react_dom_1.default;
global.ReactDOMServer = server_1.default;
dotenv_1.default.load({
    debug: true,
    path: '../.env',
});
const m = new river_flow_1.Flow(['npm run build', 'npm run postcss:build', 'npm run build:temp']);
m.public = path_1.resolve(__dirname, '../client/build');
m.get('/', async ({ res, path }) => {
    await reactParser_1.parser.render(res, '/');
    return;
});
listeners_1.default(m);
m.gate(({ req }) => {
    river_flow_1.initLogger("Logger", "italic")(`${req.method}: ${req.method === "POST" ? req.url + ' >> ' + JSON.stringify(req.body, null, 2) : req.url}`);
});
m.listen(+(process.env['PORT'] || 8000));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFtRDtBQUNuRCw2Q0FBNkM7QUFDN0MsaUNBQXlCO0FBQ3pCLHlDQUFnQztBQUNoQywyQ0FBb0Q7QUFDcEQsK0JBQThCO0FBQzlCLDJDQUF1QztBQUN2QyxtQ0FBd0I7QUFHeEIsTUFBTSxDQUFDLEtBQUssR0FBRyxlQUFLLENBQUE7QUFFcEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFBO0FBRTFCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsZ0JBQWMsQ0FBQTtBQUN0QyxnQkFBRyxDQUFDLElBQUksQ0FBQztJQUNQLEtBQUssRUFBRSxJQUFJO0lBQ1gsSUFBSSxFQUFFLFNBQVM7Q0FDaEIsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLEdBQUcsSUFBSSxpQkFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtBQUNwRixDQUFDLENBQUMsTUFBTSxHQUFHLGNBQU8sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUNqQyxNQUFNLG9CQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM3QixPQUFNO0FBQ1IsQ0FBQyxDQUFDLENBQUE7QUFFRixtQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRWhCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7SUFDakIsdUJBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtBQUM1SSxDQUFDLENBQUMsQ0FBQTtBQUVGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQSJ9