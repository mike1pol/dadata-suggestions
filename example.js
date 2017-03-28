'use strict';

const Dadata = require('./index');
const dadata = new Dadata('2fb25e10358f6093876f1cbbd390e2917e7d5503');

dadata.email('pma')
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);
