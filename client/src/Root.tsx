import React, { FunctionComponent, ComponentClass } from 'react'
import * as RD from 'react-router-dom'
import * as RS from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import {
  StaticRouter,
  StaticContext,
  RouteComponentProps
} from 'react-router'
import Index from './views/index'
import { Nav } from './components/Nav';
import Income from './views/Income';
import Register from './views/Register';
import Login from './views/Login';
import { createBrowserHistory } from "history"

export interface RootOptions {
  context: StaticContext 
  location: string
}

export interface ViewExport {
  component:
    | ComponentClass<any, any>
    | FunctionComponent<any>
    | ComponentClass<RouteComponentProps<any, StaticContext, any>, any>
    | FunctionComponent<RouteComponentProps<any, StaticContext, any>>
  path: string
}

export default (
  context: 'Server' | 'Client',
  { context: ctx, location }: RootOptions = {
    context: {},
    location: '/'
  }
) => {
  // Prepare routes
  const routes = [Login, Register, Income, Index] as ViewExport[]
  
  // Switch render
  let render: typeof React.Component.prototype.render
  if (context === 'Client')
    render = function() {
      return (
        <BrowserRouter>
          <Nav/>
          <RD.Switch children={routes.map(route => <RD.Route {...route} />)}/>
        </BrowserRouter>
      )
    }
  else
    render = function() {
      return <StaticRouter location={location} context={ctx}>
        <Nav/>
        <RS.Switch children={routes.map(route => <RS.Route {...route} />)}/>
      </StaticRouter>
    }

    // @ts-ignore
  return class Root extends (React || global.React).Component {
    constructor(props: any) {
      super(props)
      this.render = render.bind(this)
    }
  }
}
