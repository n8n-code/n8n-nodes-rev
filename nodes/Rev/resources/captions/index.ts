import type { INodeProperties } from 'n8n-workflow';

export const captionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Captions"
					]
				}
			},
			"options": [
				{
					"name": "Get Captions",
					"value": "Get Captions",
					"action": "Get Captions",
					"description": "Returns the caption output for a transcription job. We currently support SubRip (SRT) and Web Video Text Tracks (VTT) output.\nCaption output format can be specified in the `Accept` header. Returns SRT by default.\n***\nNote: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete caption file. This is rare, but not impossible.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jobs/{{$parameter[\"id\"]}}/captions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /jobs/{id}/captions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Captions"
					],
					"operation": [
						"Get Captions"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "MIME type specifying the caption output format",
			"default": "application/x-subrip",
			"type": "options",
			"options": [
				{
					"name": "Application X Subrip",
					"value": "application/x-subrip"
				},
				{
					"name": "Text Vtt",
					"value": "text/vtt"
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
						"Captions"
					],
					"operation": [
						"Get Captions"
					]
				}
			}
		},
		{
			"displayName": "Speaker Channel",
			"name": "speaker_channel",
			"description": "Identifies which channel of the job output to caption. Default is `null` which works only for jobs with no `speaker_channels_count` provided during job submission.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "speaker_channel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Captions"
					],
					"operation": [
						"Get Captions"
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
						"Captions"
					],
					"operation": [
						"Get Captions"
					]
				}
			}
		},
];
