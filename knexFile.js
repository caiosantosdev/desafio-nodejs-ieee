const knexConfiguration = {
  development:{
      client: 'mysql',
      connection: {
        version: '8.0.28',
        host : 'localhost',
        port : 3306,
        user : 'root',
        password : 'ieeevents',
        database : 'ieeevents'
      },
      migrations: {
        tableName: 'migrations',
        directory: './src/database/migrations'
      }
  }
}




module.exports = knexConfiguration;
