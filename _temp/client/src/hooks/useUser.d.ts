export interface DispatchProps {
    item: "expense" | "subsciption" | "income";
    action: "add" | "delete";
    data: {
        [key: string]: any;
    };
}
export declare const useUser: (userID: string) => any[];
