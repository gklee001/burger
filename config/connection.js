var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "test",
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_RUL);
} else {
    connection = mysql.createConnection({
        host: 'lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'kva8vl4a1156s3wb',
        password: 'fdh17xgu0efiju8r',
        database: 'fgkagewqwqbt1cas',
        port: 3306
    });
};


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})



module.exports = connection;