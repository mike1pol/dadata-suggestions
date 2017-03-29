'use strict';
const API_KEY = '';
const Dadata = require('./index');
const dadata = new Dadata(API_KEY);

dadata.bank({ query: 'сбербанк' })
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);
