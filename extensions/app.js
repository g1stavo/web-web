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
        "user1" : {
            "name": "Talavera",
            "extension": "0001"
        },
        "user2" :{
            "name" : "Gabriel",
            "extension" : "0002"
        },
        "user3" : {
            "name" : "Gustavo",
            "extension" : "0003"
        },
        "user4" : {
            "name": "Silvia",
            "extension" : "0004"
        },
        "user5" : {
            "name": "Renan",
            "extension" : "0005"
        },
        "user6" : {
            "name": "Marcel",
            "extension" : "0666"
        },
        "user7" : {
            "name": "Eduardo",
            "extension" : "0007"
        }
    };
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
