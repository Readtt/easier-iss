const { get } = require('https')
const { URL, URLSearchParams } = require('url')
const endpoints = require('./endpoints.json');

function getContent(url) {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            const { statusCode } = res;
            if(statusCode !== 200) {
                res.resume();
                reject(`Request failed with the status code: ${statusCode}`);
            }
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {rawData += chunk});
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch(e) {
                    reject(`Error: ${e.message}`)
                }
            });
        }).on('error', (err) => {
            reject(`Error: ${e.message}`);
        })
    });
}

class ISSClient {
    constructor() {
        let self = this;
        self.iss = {};
        let baseURL = 'https://api.wheretheiss.at/v1';
        Object.keys(endpoints.iss).forEach(async (endpoint) => {
            self.iss[endpoint] = async function (queryParams = '') {
                let url = new URL(`${baseURL}${endpoints.iss[endpoint]}`);
                queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
                return await getContent(url.toString());
            }
        })
    }
}

module.exports = ISSClient;