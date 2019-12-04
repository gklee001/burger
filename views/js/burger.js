$(function () {
    $("form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerdata").val().trim(),
            devoured: 0
        };

        //send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );

    });

    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        console.log("I'm trying to get the id", id)
        //send the delete request.
        $.ajax("/api/burgers" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("delete burger", id);
                location.reload();
            }
        );

    });

});
