declare class ISSClient {
    iss: {
        data(): Promise<ISSClient.ISSRequestResults>;
    }
}

export = ISSClient;

declare namespace ISSClient {
    export interface ISSQueryParams {
        text: string;
    }
    export interface ISSRequestResults {
        url: string;
    }
    export interface ISSChatResults {
        response: string;
        url?: string;
    }
}