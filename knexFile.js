const knexConfiguration = {
  development:{
      client: 'mysql',
      connection: {
        database : 'ieeevents',
        version: '8.0.28',
        host : '127.0.0.1',
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
