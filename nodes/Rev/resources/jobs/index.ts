import type { INodeProperties } from 'n8n-workflow';

export const jobsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					]
				}
			},
			"options": [
				{
					"name": "Get List Of Jobs",
					"value": "Get List Of Jobs",
					"action": "Get List of Jobs",
					"description": "Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jobs"
						}
					}
				},
				{
					"name": "Submit Transcription Job",
					"value": "Submit Transcription Job",
					"action": "Submit Transcription Job",
					"description": "Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/jobs"
						}
					}
				},
				{
					"name": "Delete Job By ID",
					"value": "Delete Job By ID",
					"action": "Delete Job by Id",
					"description": "Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/jobs/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Job By ID",
					"value": "Get Job By ID",
					"action": "Get Job By Id",
					"description": "Returns information about a transcription job",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/jobs/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get List Of Jobs"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limits the number of jobs returned, default is 100, max is 1000",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get List Of Jobs"
					]
				}
			}
		},
		{
			"displayName": "Starting After",
			"name": "starting_after",
			"description": "If specified, returns transcription jobs submitted before the job with this id, exclusive (job with this id is not included)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "starting_after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get List Of Jobs"
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
						"Jobs"
					],
					"operation": [
						"Get List Of Jobs"
					]
				}
			}
		},
		{
			"displayName": "POST /jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Submit Transcription Job"
					]
				}
			}
		},
		{
			"displayName": "POST /jobs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Submit Transcription Job"
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
						"Jobs"
					],
					"operation": [
						"Submit Transcription Job"
					]
				}
			}
		},
		{
			"displayName": "DELETE /jobs/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Delete Job By ID"
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
						"Jobs"
					],
					"operation": [
						"Delete Job By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /jobs/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Jobs"
					],
					"operation": [
						"Get Job By ID"
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
						"Jobs"
					],
					"operation": [
						"Get Job By ID"
					]
				}
			}
		},
];
