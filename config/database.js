// Configuração do banco de dados

const config = {
  mysql: {
    database: 'nodemvc',
    user: 'root',
    password: 'root',
    host: '192.168.1.8',
    port: '3306',
    dialect: 'mysql'
  }, 
  pgsql: {
    database: 'nodemvc',
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: '5432',
    dialect: 'pgsql'
  }
}
  
module.exports = config;