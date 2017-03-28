//Import Module
const callApiGateway = require('./apiGateway');

const HOST = 'utbjl6mbs0.execute-api.us-east-1.amazonaws.com';
const SERVICE_OPERATION = '/qa/-services-taxesreportsservice-gettaxstament';
const REQUEST_TYPE = 'POST';
const HEADER = {
    'x-api-key': 'iIMFZYBanO8X1dePUKZDZ6P5CbUbcQWi8GqjaBeR',
    'content-type': 'application/json'
};
//call ApiGateway
callApiGateway(HOST, SERVICE_OPERATION, REQUEST_TYPE, HEADER,
    {
        "integrationRequest": {
            "header": {
                "consumer": {
                    "id": "id",
                    "description": "description",
                    "deviceInfo": {
                        "id": "id",
                        "type": "type",
                        "data": "data"
                    }
                },
                "channel": "channel",
                "messageId": "messageId",
                "requestDateTime": "requestDateTime",
                "destination": {
                    "service": {
                        "name": "name",
                        "operation": "operation",
                        "version": "version"
                    },
                    "region": "region",
                    "container": {
                        "id": "id",
                        "name": "name",
                        "type": "type"
                    }
                },
                "messageContext": {
                    "property": {
                        "key": "key",
                        "value": "value"
                    }
                }
            },
            "body": {
                "taxStatementRequest": {
                    "cifid": "BD15000000425190",
                    "year": "2016"
                }

            }

        }

    },

    function (statusCode, result) {
        //statusCode Estado HTTP Ej: 200, 400
        //result Objeto JSON o String con la respuesta del servicio (JSON cuando statusCode es igual a 200)
        
        //console.log(statusCode, result);
    }, function (error) {
        console.log(error);
    });