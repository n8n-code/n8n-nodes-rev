import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountDescription } from './resources/account';
import { jobsDescription } from './resources/jobs';
import { captionsDescription } from './resources/captions';
import { transcriptDescription } from './resources/transcript';

export class Rev implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'rev',
		name: 'N8nDevRev',
		icon: { light: 'file:./rev.png', dark: 'file:./rev.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Rev.ai provides quality speech-text recognition via a RESTful API. All public methods and objects are documented here for developer reference',
		defaults: { name: 'rev' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevRevApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Account",
					"value": "Account",
					"description": ""
				},
				{
					"name": "Jobs",
					"value": "Jobs",
					"description": ""
				},
				{
					"name": "Captions",
					"value": "Captions",
					"description": ""
				},
				{
					"name": "Transcript",
					"value": "Transcript",
					"description": ""
				}
			],
			"default": ""
		},
		...accountDescription,
		...jobsDescription,
		...captionsDescription,
		...transcriptDescription
		],
	};
}
