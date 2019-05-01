import { ReactChild } from 'react';
interface P {
    children?: ReactChild;
    route_string: string;
    route_title?: string;
}
export declare const Subsite: ({ children, route_string, route_title }: P) => JSX.Element;
export {};
