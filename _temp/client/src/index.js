"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const Root_1 = require("./Root");
const serviceWorker = require("./serviceWorker");
const Root = Root_1.default('Client');
const root = document.getElementById('root');
react_dom_1.default.hydrate(react_1.default.createElement(Root, null), root);
if (location.port === '3000' && root) {
    const css_link = document.createElement('link');
    css_link.rel = "stylesheet";
    css_link.type = 'text/css';
    css_link.media = 'all';
    css_link.href = `${location.origin.replace(':3000', ':8080')}/static/css/styles.css`;
    document.head.appendChild(css_link);
}
serviceWorker.unregister();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUF5QjtBQUN6Qix5Q0FBZ0M7QUFDaEMsaUNBQTZCO0FBQzdCLGlEQUFnRDtBQUVoRCxNQUFNLElBQUksR0FBRyxjQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDL0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUM1QyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyw4QkFBQyxJQUFJLE9BQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUNoQyxJQUFHLFFBQVEsQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksRUFBRTtJQUNuQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9DLFFBQVEsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFBO0lBQzNCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBQzNCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLHdCQUF3QixDQUFBO0lBQ3BGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0NBQ3BDO0FBTUQsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFBIn0=