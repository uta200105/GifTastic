      // array
      var cartoons = ["Looney Toons", "The Simpsons", "SpongeBob", "Rugrats"];

      // data
      function renderButtons() {
        $("#movies-view").empty();

        for (var i = 0; i < cartoons.length; i++) {
          var a = $("<button>");
          a.addClass("cartoon");
          a.attr("data-name", cartoons[i]);
          a.text(cartoons[i]);
          $("#view").append(a);
      }
      }

      $("#add").on("click", function(event) {
        event.preventDefault();

        var cartoon = $("#input").val().trim();
        cartoons.push(cartoon);

        renderButtons();
      });

      renderButtons();