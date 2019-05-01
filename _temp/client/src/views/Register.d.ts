import React, { ReactElement } from 'react';
import { ViewExport } from '../Root';
interface FIP {
    title: string;
    type: string;
    placeholder: string;
    onChange: React.FormEventHandler;
}
export declare const FormInput: ({ title, type, placeholder, onChange }: FIP) => JSX.Element;
export declare const Register: () => ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
declare const _default: ViewExport;
export default _default;
