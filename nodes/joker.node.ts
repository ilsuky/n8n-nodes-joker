import { IExecuteFunctions } from 'n8n-core';
import { IDataObject, ILoadOptionsFunctions, INodeExecutionData, INodeParameters, INodeProperties, INodeType, INodeTypeDescription, NodeOperationError, INodePropertyOptions } from 'n8n-workflow';
import { idoitRequest } from './GenericFunctions';

export class joker implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Joker',
		name: 'joker',
		icon: 'file:joker.png',
		group: ['transform'],
		version: 1,
		description: 'Joker DMAPI',
		defaults: {
			name: 'joker',
			color: '#772244',
		},
		subtitle: '={{$parameter["namespace"]}}',
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'joker',
				required: true,
			},
		],
		properties: [
		
		]
	};
	
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnItems: INodeExecutionData[] = [];
		let item: INodeExecutionData;
		
		const namespace = this.getNodeParameter('namespace',  0, '') as string;
		const operation = this.getNodeParameter('operation', 0, '') as string;
		
		const credentials = await this.getCredentials('joker') as IDataObject;
		
		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
			} catch (error:any) {
				if (this.continueOnFail()) {
					returnItems.push({json:{ error: error.message}});
					continue;
				}
				throw error;
			}			
		}
		
		return this.prepareOutputData(returnItems);
	}
}				