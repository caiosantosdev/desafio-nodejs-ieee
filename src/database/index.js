const knexFile = require('./../../knexFile');
const knex = require('knex')(knexFile["development"]);

module.exports = knex;