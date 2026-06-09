import type { INodeProperties } from 'n8n-workflow';

export const accountDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					]
				}
			},
			"options": [
				{
					"name": "Get Account",
					"value": "Get Account",
					"action": "Get Account",
					"description": "Get the developer's account information",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_access_token",
			"type": "string",
			"default": "",
			"description": "All API requests must be authorized with an `Authorization: Bearer` header\n\n> `-H \"Authorization: Bearer $REV_ACCESS_TOKEN\"`\n\nDevelopers can obtain their access token from their [settings page](https://rev.ai/access_token). This token need only be generated once and never expires.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
];
