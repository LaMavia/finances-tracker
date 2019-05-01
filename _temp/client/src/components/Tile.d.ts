import { ReactChild } from 'react';
interface P {
    title: string;
    color: string;
    children?: ReactChild;
    href: string;
}
export declare const Tile: ({ title, color, children, href }: P) => JSX.Element;
export {};
