$(function () {
  $(".create").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

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

  $(".delete").on("click", function (event) {
    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function () {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });

  $(".devour").on("click", function (event) {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");

    const newDevourState = {
      devoured: "true"
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour to", newDevour);
        location.reload();
      }
    );
  });
});