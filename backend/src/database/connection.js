const knex = require('knex');
const configuraion = require('../../knexfile');

const connection = knex(configuraion.development);

module.exports = connection;