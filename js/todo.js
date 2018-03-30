if (typeof(Storage) !== "undefined") {
  // Yippee! We can use localStorage awesomeness
  //Load Any Previous Todos
  for (var i = 0; i < localStorage.length; i++) {
    $("ul").append("<li data-id = " + i +" ><span>X</span> "+ localStorage[localStorage.key(i)] + "</li>");
  }

  //Strike through ToDo when clicked
  $("ul").on("click", "li", function() {
    //Alternate between strike and inherit
    $(this).toggleClass("completed");
  });

  //Delete Stored ToDo
  $("ul").on("click", "span", function(event) {
    //Prevent other events from firing
    event.stopPropagation();
    //Remove from localStorage
    localStorage.removeItem(localStorage[localStorage.key($(this).parent().attr("data-id"))]);
    //Remove visible li
    $(this).parent().fadeOut(function() {
      $(this).remove();
    });
  });

  //Create ToDo
  $("input[type='text']").on("keypress", function(event) {
    if (event.which === 13 && $(this).val() !== "") {
      //Save ToDo
      localStorage.setItem($(this).val(), $(this).val());
      //Grab user input
      var text = $(this).val();
      //Clear input
      $(this).val("");
      //Add new li and append text
      $("ul").append("<li><span>X</span> "+ text + "</li>");
    }
  });
} else {
  $("h1").text("Local Storage is not supported.");
}
