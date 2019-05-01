import { Flow, River } from "river-flow";
import { parser } from "../reactParser";

export default [
  [
    'GET', '/', async ({ res }) => {
      await parser.render(res, '/')
    }
  ]
] as River.RouteExport[]