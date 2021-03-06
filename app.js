var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res) {

    res.send("Hello world");
});


//Api Routes
var getTaxStatamentController = require("./controllers/getTaxStatament");
router.post('/getTaxStatament', function (req, res) {
    getTaxStatamentController.getTaxStatament(req, res);

});


app.use(router);


app.listen(8080, function () {
    console.log("Node server running on http://localhost:8080");
});