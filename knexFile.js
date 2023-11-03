const knexConfiguration = {
  client: 'mysql',
  development:{
      client: 'mysql',
      connection: {
        database : 'mercado',
        version: '8.0.28',
        host : 'localhost',
        port : 3306,
        user : 'root',
        password : 'ieeevents'
      },
      migrations: {
        tableName: 'migrations',
        directory: './src/database/migrations'
      }
  }
}




module.exports = knexConfiguration;
