var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = 8081;

var router = express.Router();

router.get('/', (req, res) => {
    const p = {
        "users" : [
            { "name": "Talavera", "extension": "0001" },
            { "name" : "Gabriel", "extension" : "0002" },
            { "name" : "Gustavo", "extension" : "0003" },
            { "name": "Silvia", "extension" : "0004" },
            { "name": "Renan", "extension" : "0005" },
            { "name": "Marcel", "extension" : "0666" },
            { "name": "Eduardo", "extension" : "0007" }
        ]};
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
