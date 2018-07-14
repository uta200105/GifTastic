      // array
      var cartoons = ["Looney Toons", "The Simpsons", "SpongeBob", "Rugrats"];

      // data
      function renderButtons() {
        $("#view").empty();

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

      function getGifs()
      {
      var user = $("#input").val();
      var searchURL = "https://api.giphy.com/v1/gifs/search?api_key=I8eaYN8theLHpvdhSYjyNBCIjVm6faDv&q=" + user + "&limit=10&offset=0&rating=G&lang=en"

      $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function (response) 
    {
        console.log(response);
        console.log(user);
    })
    }
    $("#input").on("click", getGifs);