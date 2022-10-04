import {
	IExecuteFunctions,
} from 'n8n-core';
import {
	OptionsWithUri,
} from 'request';

import {
	IDataObject,
	ILoadOptionsFunctions,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';

export async function jokerRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	endpoint: string,
	qs: IDataObject = {},
	authsid: string
) {
	const qsp = { "auth-sid": authsid }
	qs.push(qsp);
	
	const credentials = await this.getCredentials('joker')  as IDataObject;
	const options: OptionsWithUri = {
		headers: {
		},
		method: 'GET',
		qs,
		uri: `${credentials.host}/${endpoint}`,
	};

	try {
		const returnr = await this.helpers.request!(options);
		const dataObject = {};
		let list = [];
		let row = [];
		const splitData = returnr.data.split('\n');
		for(row of splitData){

		  if(row.includes(":")){
			const split = row.split(':');
			dataObject[split[0]] = split[1].trim();
		  }
		  else if(row.length >0){
			list.push(row);
		  }
		}
		dataObject.list = list;
		return dataObject;
	} catch (error:any) {
		throw new NodeApiError(this.getNode(), error);
	}
}

/**
 * Get a Auth-Sid.
 */
 export async function getauthsid(
	this: IExecuteFunctions | ILoadOptionsFunctions,
) {
	const credentials = await this.getCredentials('joker') as IDataObject;
	const qs = { "api-key": `${credentials.apikey}` }
	const options: OptionsWithUri = {
		method: 'GET',
		qs,
		uri: `${credentials.host}/login`,
		rejectUnauthorized: false,
	};

	try {
		const authsidr = await this.helpers.request!(options);
		let authsid : string = "";
		let row = [];
		const splitData = authsidr.data.split('\n');
		for(row of splitData){
			  if(row.includes("Auth-Sid: ")){
				  const split = row.split(':');
				  authsid = split[1].trim();
			  }
		}			
		return authsid;
	} catch (error:any) {
		throw new NodeApiError(this.getNode(), {error:error});
	}
}