import mysql from "mysql";

const connection = mysql.createConnection({
  host: "sql10.freesqldatabase.com",
  database: "sql10735009",
  user: "sql10735009",
  password: process.env.PASS,
  port: "3306",
});

connection.connect();

export const films = (sql, params, errorMessage) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (error, response) => {
      if (error) return reject(errorMessage);
      const jsonResponse = JSON.parse(JSON.stringify(response));

      return resolve(jsonResponse);
    });
  });
};

export default connection;
