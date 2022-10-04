import { IExecuteFunctions } from 'n8n-core';
import { IDataObject, ILoadOptionsFunctions } from 'n8n-workflow';
export declare function jokerRequest(this: IExecuteFunctions | ILoadOptionsFunctions, endpoint: string, qs: IDataObject | undefined, authsid: string): Promise<{}>;
export declare function getauthsid(this: IExecuteFunctions | ILoadOptionsFunctions): Promise<string>;
