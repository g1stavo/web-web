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
    const p = await getData('http://api.openweathermap.org/data/2.5/weather?id=6323121&units=metric&appid=997e9b9cb61c6f19903b67e67ff5e610');
    res.json(p);
});

router.get('/convert', async (req, res) => {
    const time = req.query.unix_timestamp;
    let date = new Date(time*1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    res.json({'time': formattedTime});
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