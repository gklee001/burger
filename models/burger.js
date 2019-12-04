var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        console.log("hei")
        orm.selectAll("burgers", function (res) {
            console.log(res)
            cb(res)

        });
    },
    insertOne: function (table, cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;