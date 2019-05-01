import { FunctionComponent, ComponentClass } from 'react';
import { StaticContext, RouteComponentProps } from 'react-router';
export interface RootOptions {
    context: StaticContext;
    location: string;
}
export interface ViewExport {
    component: ComponentClass<any, any> | FunctionComponent<any> | ComponentClass<RouteComponentProps<any, StaticContext, any>, any> | FunctionComponent<RouteComponentProps<any, StaticContext, any>>;
    path: string;
}
declare const _default: (context: "Server" | "Client", { context: ctx, location }?: RootOptions) => {
    new (props: any): {
        [x: string]: any;
    };
    [x: string]: any;
};
export default _default;
