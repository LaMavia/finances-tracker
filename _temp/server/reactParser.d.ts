import { River } from 'river-flow';
export declare class ReactParser {
    private _cache;
    root: any;
    private write;
    loadLayout(): any;
    render(response: River.Outflow, path: string): Promise<{}>;
}
export declare const parser: ReactParser;
