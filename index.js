'use strict';
const https = require('https');

/** Dadata API class */
class Dadata {
  /**
   * API constructor
   * @param {string} apiKey Dadata api key
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * Internal request client
   * @private
   * @param {string} api API name
   * @param {string} query Search query
   * @param {number} [count=10] count of results
   * @returns {Promise}
   */
  _client(api, query, count) {
    count = count || 10;
    const request = {
      query,
      count
    };
    const options = {
      method: 'POST',
      hostname: 'suggestions.dadata.ru',
      path: `/suggestions/api/4_1/rs/suggest/${api}`,
      port: 443,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${this.apiKey}`
      }
    };
    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let result = '';
        if (res.statusCode !== 200) {
          return reject({
            code: res.statusCode,
            message: 'HTTP Error: bad status code'
          });
        }
        res.on('data', (chunk) => {
          result += chunk;
        });
        res.on('end', () => {
          try {
            result = JSON.parse(result);
          } catch (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
      req.on('error', reject);
      req.write(JSON.stringify(request));
      req.end();
    });
  }
  /**
   * Search FIO
   * @param {string} query FIO query
   * @param {number} [count=10] Count of results
   * @return {Promise}
   */
  fio(query, count) {
    return this._client('fio', query, count)
  }
  /**
   * Search address
   * @param {string} query Address query
   * @param {number} [count=10] Count of results
   * @return {Promise}
   */
  address(query, count) {
    return this._client('address', query, count)
  }
  /**
   * Search organisations
   * @param {string} query Organisations query
   * @param {number} [count=10] Count of results
   * @return {Promise}
   */
  party(query, count) {
    return this._client('party', query, count)
  }
  /**
   * Search bank
   * @param {string} query Bank query
   * @param {number} [count=10] Count of results
   * @return {Promise}
   */
  bank(query, count) {
    return this._client('bank', query, count)
  }
  /**
   * Search email
   * @param {string} query Email query
   * @param {number} [count=10] Count of results
   * @return {Promise}
   */
  email(query, count) {
    return this._client('email', query, count)
  }
}

module.exports = Dadata;
