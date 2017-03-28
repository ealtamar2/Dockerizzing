//Import Module
var callApiGateway = require('./apiGateway');
const apiConstant = require('./apiConstant');

exports.getTaxStatament = function (req, res) {
    console.log('POST');

    //call ApiGateway
    callApiGateway(apiConstant.HOST, apiConstant.SERVICE_OPERATION,apiConstant.REQUEST_TYPE, apiConstant.HEADER,
        req.body, function (statusCode, result) {
            res.send(result);
        }, function (error) {
            console.log(error);
        });
};