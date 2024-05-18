import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "sAMUELSAM@8",
    database:"crud"
});