# Florianópolis Weather API

Simple API built over [OpenWeatherMap](https://openweathermap.org/) that returns current weather in Florianópolis, Santa Catarina and converts UNIX timestamp to HH:MM:SS format.

`
http://ine5646-env.stpppmiam6.us-east-2.elasticbeanstalk.com
`

### Endpoints

*GET /api*:  returns current weather in JSON form. Understand parameters [here](https://openweathermap.org/current)

*GET /api/convert?unix_timestamp=*: converts UNIX timestamp (unit of sys.sunrise and sys.sunset) to HH:MM:SS format. The timestamp should go on the unix_timestamp query param
