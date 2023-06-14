module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "4PAB75Lbc15",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
