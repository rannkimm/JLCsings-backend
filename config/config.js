require('dotenv').config()
module.exports = {
  development: {
    database: "JLCsings",
    dialect: "postgres"
  },
  test: {
    database: "JLCsings",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
