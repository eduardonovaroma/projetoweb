const { Sequelize } = require('sequelize')

const { mysql } = require('../../config/database.js');

const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  dialect: mysql.dialect,
});


async function createDatabase(sequelize) {
  try {
      await sequelize.authenticate();
      await sequelize.sync(); // Isso criará as tabelas
      
      console.log('Banco de dados criado com sucesso!');
  } catch (error) {
      console.error('Erro ao criar o banco de dados:', error);
  } finally {
      // sequelize.close(); // Encerra a conexão com o banco de dados
  }
}

module.exports = { sequelize, createDatabase };
