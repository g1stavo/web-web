var fs = require("fs");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var fetch = require("node-fetch");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8081;

var router = express.Router();   

getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
};

router.get('/', async (req, res) => {
    const p = await getData({
        "user1" : {
            "name": "Talavera",
            "extension": "0001"
        }
    });
    res.json(p);
});

app.use('/api', router);

init = () =>{
    app = app.listen(port);
};

stop = () => {
    app.close();
};

if(process.argv.indexOf('start') != -1){
    init();
    console.log("Server listening on port: ", port);
};

module.exports = {
    init,
    stop
};