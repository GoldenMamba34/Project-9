$("#darkMode").parent().on("click touchsstart", function() {
  $("body").css("background", "rgb(10,10,10)");
  $("body").css("color", "white");
  $("h1").css("color", "white");
  $("p").css("color", "white");
  $(".modal-content").css("background", "rgb(10,10,10)");
  return $(".modal-content").css("color", "white");
});

$("#lightMode").parent().on("click touchsstart", function() {
  $("body").css("background", "white");
  $("h1").css("color", "#212529");
  $("p").css("color", "#212529");
  $(".modal-content").css("background", "white");
  $(".modal-content").css("color", "#212529");
  return $("body").css("color", "unset");
});
