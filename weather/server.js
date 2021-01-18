const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

router.get('/', async (req, res) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?id=6323121&units=metric&appid=997e9b9cb61c6f19903b67e67ff5e610';
    const p = await getData(url);
    res.json(p);
});

router.get('/convert', async (req, res) => {
    const time = req.query.unix_timestamp;
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = `0 ${date.getMinutes()}`;
    let seconds = `0 ${date.getSeconds()}`;
    let formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
    res.json({'time': formattedTime});
});

app.use('/api', router);

const init = (port = 8081) => {
    app = app.listen(port);
}

const stop = () => {
    app.close();
}

if (process.argv.indexOf('start') != -1) {
    init();
    console.log(`Server listening on port: ${port}`);
};

module.exports = { init, stop };