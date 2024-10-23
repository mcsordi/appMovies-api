import mysql from "mysql2";
import "dotenv/config";


const connection = mysql.createConnection(
process.env.DATABASE
);

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
