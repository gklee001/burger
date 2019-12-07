// import mysql connection.

var connection = require("./connection.js");
// console.log(connection)
//helper function for sql syntax, we want to create an array of question marks - ["?", "?", "?"]. toString "?, ?, ?"

function printQMarks(num) {
    var arr = []
        ;
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//helper function to convert object key/value pairs to sql syntax

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (tableInput, cb) {
        console.log("pulling")
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString)
        //console.log(connection.query(queryString))
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log("this stops at  ", result)
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        console.log(typeof vals)
        queryString += " (";
        queryString += cols.toString() + ",devoured";
        queryString += ") ";
        queryString += "VALUES ('";
        queryString += vals + "',false"
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            console.log("this is the results in orm.js", result)
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;