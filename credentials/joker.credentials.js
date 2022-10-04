import { ICredentialType, NodePropertyTypes, INodeProperties } from 'n8n-workflow';

export class joker implements ICredentialType {
	name = 'joker';
	documentationUrl = 'https://joker.com/faq/category/33/22-dmapi.html';
	displayName = 'joker.com';

	properties: INodeProperties[] = [
		{
			displayName: 'Host',
			name: 'host',
			type: 'options',
			options: [
				{
					name: 'Live',
					value: 'https://dmapi.joker.com/request/',
				},
				{
					name: 'OTE - Demo',
					value: 'https://dmapi.ote.joker.com/request/',
				},
			],
			description: 'Use Live or OTE',
		},
		{
			displayName: 'API-Key',
			name: 'apikey',
			type: 'string',
			default: '',
		},
	];
}
