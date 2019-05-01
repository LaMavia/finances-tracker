"use strict";
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const querifier_1 = require("querifier");
const nativfy_1 = require("querifier/dist/src/helpers/nativfy");
const river_flow_1 = require("river-flow");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
class MongoDBridge {
    constructor(db_uri) {
        this.cache = new Map();
        this.uri = db_uri;
        this.initConnection();
    }
    initConnection() {
        return new Promise(res => {
            mongodb_1.default
                .connect(this.uri)
                .then(d => d.db())
                .then(d => {
                this.db = d;
                res();
            })
                .catch(river_flow_1.initLogger('MongoDBridge', 'bgRed'));
        });
    }
    getIter(query) {
        return __asyncGenerator(this, arguments, function* getIter_1() {
            for (const collection in query) {
                const col = this.db.collection(collection);
                const dontWantMORE = yield yield __await(yield __await(col
                    .find(querifier_1.natifyCondition(query[collection]))
                    .toArray()));
                if (dontWantMORE === true)
                    break;
            }
            return yield __await(void 0);
        });
    }
    get(query) {
        return new Promise(async (res, rej) => {
            const promises = [];
            for (const collection in query) {
                const col = this.db.collection(collection);
                const arr = col
                    .find(querifier_1.natifyCondition(query))
                    .toArray()
                    .catch(rej);
                promises.push(arr);
            }
            res(Promise.all(promises));
        });
    }
    create(model, data) {
        const collection = model.name;
        const col = this.db.collection(collection);
        if (Array.isArray(data)) {
            const obs = data.map(d => {
                const ob = {};
                for (const k in d) {
                    ob[k] = d[k];
                }
                return ob;
            });
            return col.insertMany(obs);
        }
        else {
            const inst = new model(data);
            const ob = {};
            for (const k in inst) {
                ob[k] = inst[k];
            }
            return col.insertOne(data);
        }
    }
    update({ filter, query, collection }) {
        const q = nativfy_1.natifyUpdate(query);
        return this.db.collection(collection).updateMany(filter, q);
    }
    delete(query) {
        const ps = [];
        for (const col in query) {
            const q = query[col];
            ps.push(this.db.collection(col).deleteMany(q));
        }
        return Promise.all(ps);
    }
}
exports.MongoDBridge = MongoDBridge;
dotenv_1.load({
    path: path_1.resolve(__dirname, "../.env")
});
exports.database = new MongoDBridge(process.env['DBURI']);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMEU7QUFDMUUseUNBQThDO0FBTTlDLGdFQUFpRTtBQUVqRSwyQ0FBK0M7QUFDL0MsbUNBQThCO0FBQzlCLCtCQUErQjtBQVEvQixNQUFhLFlBQVk7SUFXdkIsWUFBWSxNQUFjO1FBVjFCLFVBQUssR0FNRCxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBS1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUE7UUFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixpQkFBSztpQkFDRixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUNqQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ1gsR0FBRyxFQUFFLENBQUE7WUFDUCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLHVCQUFVLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQXlCOztZQUN0QyxLQUFLLE1BQU0sVUFBVSxJQUFJLEtBQUssRUFBRTtnQkFDOUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQzFDLE1BQU0sWUFBWSxHQUFHLG9CQUFNLGNBQU0sR0FBRztxQkFDakMsSUFBSSxDQUFDLDJCQUFlLENBQUMsS0FBSyxDQUFD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