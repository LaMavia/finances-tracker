"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const server_1 = require("react-dom/server");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
global.React = react_1.default;
global.ReactDOM = react_dom_1.default;
global.ReactDOMServer = server_1.default;
class ReactParser {
    constructor() {
        this._cache = new Map();
        this.root = require(path_1.resolve(__dirname, '../_temp/client/src/', 'Root.js')).default;
    }
    write(response, rendered_string, layout, res) {
        response.writable &&
            response.write(layout.replace('id="root">()<', rendered_string), () => {
                res('');
            });
    }
    loadLayout() {
        if (this._cache.has('__layout__'))
            return Promise.resolve(this._cache.get('__layout__'));
        return fs_extra_1.default.readFile(path_1.resolve(__dirname, '../client/build/index.html'), {
            encoding: 'utf-8',
        });
    }
    render(response, path) {
        return new Promise((res, rej) => {
            if (this._cache.has(path) && this._cache.has('__layout__')) {
                return this.write(response, this._cache.get(path), this._cache.get('__layout__'), res);
            }
            const el = this.root('Server', {
                context: {
                    code: 200,
                },
                location: path,
            });
            const rendered_string = server_1.renderToString(el);
            this._cache.set(path, rendered_string);
            this.loadLayout()
                .then((layout) => {
                this._cache.set('__layout__', layout);
                this.write(response, rendered_string, layout, res);
            })
                .catch(response.write);
        });
    }
}
exports.ReactParser = ReactParser;
exports.parser = new ReactParser();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RQYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcmVhY3RQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBdUM7QUFDdkMsK0JBQThCO0FBQzlCLDZDQUd5QjtBQUN6QixpQ0FBeUI7QUFDekIseUNBQWdDO0FBR2hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFBO0FBRXBCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsbUJBQVEsQ0FBQTtBQUUxQixNQUFNLENBQUMsY0FBYyxHQUFHLGdCQUFjLENBQUE7QUFFdEMsTUFBYSxXQUFXO0lBQXhCO1FBQ1UsV0FBTSxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQy9DLFNBQUksR0FBRyxPQUFPLENBQUMsY0FBTyxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtJQWlEL0UsQ0FBQztJQS9DUyxLQUFLLENBQ1gsUUFBdUIsRUFDdkIsZUFBdUIsRUFDdkIsTUFBYyxFQUNkLEdBQXVEO1FBRXZELFFBQVEsQ0FBQyxRQUFRO1lBQ2YsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxHQUFHLEVBQUU7Z0JBQ3BFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNULENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUMvQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFXLENBQUMsQ0FBQTtRQUNqRSxPQUFPLGtCQUFFLENBQUMsUUFBUSxDQUFDLGNBQU8sQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUMsRUFBRTtZQUNuRSxRQUFRLEVBQUUsT0FBTztTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQXVCLEVBQUUsSUFBWTtRQUMxQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzFELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FDZixRQUFRLEVBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFXLEVBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBVyxFQUN2QyxHQUFHLENBQ0osQ0FBQTthQUNGO1lBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsR0FBRztpQkFDVjtnQkFDRCxRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQTtZQUNGLE1BQU0sZUFBZSxHQUFHLHVCQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFBO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEVBQUU7aUJBQ2QsSUFBSSxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQTtnQkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNwRCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQW5ERCxrQ0FtREM7QUFFWSxRQUFBLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBIn0=