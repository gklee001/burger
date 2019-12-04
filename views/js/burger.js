$(function () {
    $("form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerdata").val().trim(),
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

    })

})
