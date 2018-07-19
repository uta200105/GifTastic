      // array
      var cartoons = ["Looney Toons", "The Simpsons", "SpongeBob", "Rugrats"];


      // create new buttons
      function renderButtons() {
       
        $("#newButtons").empty();
        for (var i = 0; i < cartoons.length; i++) {
          var a = $("<button>");
          a.addClass("cartoon btn btn-dark m-1");
          a.attr("data-name", cartoons[i]);
          a.text(cartoons[i]);
          $("#newButtons").append(a);
      }
      }
      renderButtons();

      $("#add").on("click", function(event) {
      event.preventDefault();

      var cartoon = $("input").val().trim();
      
      

      // Add users input(new button) to array
      if (cartoon !== "" && cartoons.indexOf(cartoon)=== -1); {
      cartoons.push(cartoon);
      renderButtons();
      
      }
    });

    $(document.body).on('click', '.cartoon', function() {
      // Giffy data
      $('#newgif').empty();

        // Giffy data
        var user = $(this).attr('data-name');
        var searchURL = "https://api.giphy.com/v1/gifs/search?api_key=I8eaYN8theLHpvdhSYjyNBCIjVm6faDv&q=" + user + "&limit=1&offset=0&rating=G&lang=en"
        
      // AJAX
      $.ajax({
      url: searchURL,
      method: "GET"
      })

      // Pull gify data - create new div
      .then(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
          
      var url = results[i].images.fixed_height_still.url;
      var still = results[i].images.fixed_height_still.url;
      var animate = results[i].images.fixed_height.url;

      var cartoonImg = $("<img>");

      // add still and animated gify data to new class
      cartoonImg.attr("src", url);
      cartoonImg.attr('data-still', still);
      cartoonImg.attr('data-animate', animate);
      cartoonImg.attr('data-state', 'still');
      cartoonImg.addClass('cartoon-art');

      // added new div with data included to html #newgif div
      $("#newgif").append(cartoonImg);
      }
      });
      });

      // Chnaging data-state from still to animate
      $(document.body).on('click', '.cartoon-art', function() {
        var state = $(this).attr('data-state');
        if (state === 'still') {
          $(this).attr('src', $(this).attr('data-animate'));
          $(this).attr('data-state', 'animate');
        } else {
          $(this).attr('src', $(this).attr('data-still'));
          $(this).attr('data-state', 'still');
        }
      });


      
