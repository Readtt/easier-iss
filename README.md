[![npm](https://img.shields.io/npm/v/easier-iss.svg)](https://www.npmjs.com/package/easier-iss)
[![npm](https://img.shields.io/npm/dt/easier-iss.svg?maxAge=3600)](https://www.npmjs.com/package/easier-iss)
[![install size](https://packagephobia.now.sh/badge?p=easier-iss)](https://www.npmjs.com/package/easier-iss)

![NPM](https://nodei.co/npm/easier-iss.png?downloads=true&downloadRank=true&stars=true)

# Easier-ISS

## Installation
```
npm i easier-iss
```
Simple wrapper for wheretheiss.at

### Data

| Function | Description |
| -------- | ----------- |
| `iss` | Gets all the data from the ISS endpoint. |

## Examples

Await/Async example
```js
const client = require('easier-iss')
const iss = new client()

    async function test() {
        console.log(await iss.iss.data());
      }
      
      test();
```
returns: 
```js
{
  name: 'iss',
  id: 25544,
  latitude: -51.773093040486,
  longitude: -120.01871771079,
  altitude: 439.98323490986,
  velocity: 27530.550593931,
  visibility: 'daylight',
  footprint: 4607.7631599504,
  timestamp: 1601643170,
  daynum: 2459125.0366898,
  solar_lat: -3.8808341220161,
  solar_lon: 344.09082118441,
  units: 'kilometers'
}
```

These results are NOT static. They are realtime.

This might be updated with more endpoints. 


# NOTE 
This API is rate limited to 1 request per second. Please abide by this by adding a timeout or something.