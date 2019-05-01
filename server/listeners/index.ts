import r1 from './index.list'
import r2 from './login.list'
import r3 from './register.list'
import { Flow } from 'river-flow';

export default (flow: Flow) => {
  for(const r of r1.concat(r2, r3)) flow.enslave(...r)
}