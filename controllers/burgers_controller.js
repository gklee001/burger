var express = require("express");
var burger = require("../models/burger.js")


var router = express.Router();
// console.log(burger.selectAll())
//import the model (burger.js) to use its database function


router.get("/all", function (req, res) {
    console.log('collecting data')
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };

        console.log(hbsObject);
        res.render("index", hbsObject);
    });

});

router.post("/api/burgers", function (req, res) {
    console.log("this is: ", req.body)
    burger.insertOne("burgers", "burger_name", req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;