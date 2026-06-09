import type { INodeProperties } from 'n8n-workflow';

export const transcriptDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transcript"
					]
				}
			},
			"options": [
				{
					"name": "Get Transcript By ID",
					"value": "Get Transcript By ID",
					"action": "Get Transcript By Id",
					"description": "Returns the transcript for a completed transcription job. Transcript can be returned as either JSON or plaintext format. Transcript output format can be specified in the `Accept` header. Returns JSON by default.\n***\nNote: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete transcript. This is rare, but not impossible. To guarantee 100% completeness, we recommend capturing all final hypothesis when you receive them on the client.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jobs/{{$parameter[\"id\"]}}/transcript"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /jobs/{id}/transcript",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transcript"
					],
					"operation": [
						"Get Transcript By ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "MIME type specifying the transcription output format",
			"default": "application/vnd.rev.transcript.v1.0+json",
			"type": "options",
			"options": [
				{
					"name": "Application Vnd Rev Transcript v1 0 JSON",
					"value": "application/vnd.rev.transcript.v1.0+json"
				},
				{
					"name": "Text Plain",
					"value": "text/plain"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transcript"
					],
					"operation": [
						"Get Transcript By ID"
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
						"Transcript"
					],
					"operation": [
						"Get Transcript By ID"
					]
				}
			}
		},
];
