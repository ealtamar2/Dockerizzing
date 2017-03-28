
//Imports modules
var aws4 = require('aws4');
var https = require('https');

module.exports = function callWebServiceWithAWS4(host, path, method, headers, body, onSuccess, onError) {

    delete headers['X-Amz-Date'];
    delete headers['Host'];
    delete headers['Content-Length'];
    delete headers['Authorization'];

    var options = {
        host: host,
        path: path,
        method: method,
        headers: headers,
        service: 'execute-api',
        body: JSON.stringify(body)
    };

    //Aquí se usa el modulo, las llaves las toma como variables de entorno
    options = aws4.sign(options, { accessKeyId: process.env.ACCESS_KEY, secretAccessKey: process.env.SECRET_KEY });

    callback = function (response) {
        delete headers['X-Amz-Date'];
        delete headers['Host'];
        delete headers['Content-Length'];
        delete headers['Authorization'];

        var responseString = '';

        response.on('data', function (chunk) {
            responseString += chunk;

        });

        response.on('end', function () {
            if (!!onSuccess) {
                var jsonResponse;
                try {
                    jsonResponse = JSON.parse(responseString);
                } catch (e) {
                    jsonResponse = responseString;
                }
                console.log(response.statusCode, JSON.stringify(jsonResponse));
                onSuccess(response.statusCode, jsonResponse, response);
            }
        });
    }

    var httpRequest = https.request(options, callback);

    if (!!body) {
        httpRequest.write(JSON.stringify(body));
    }

    httpRequest.on('error', function (e) {
        console.log(e);
        if (!!onError) {
            onError(e);
        }
    });
    httpRequest.end();
}