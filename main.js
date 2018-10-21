var changeToDarkTheme, changeToLightTheme, theme;

theme = "light";

changeToDarkTheme = function() {
  $("body").css("background", "#242A30");
  $("body").css("color", "white");
  $("h1").css("color", "white");
  $("p").css("color", "white");
  $(".modal-content").css("background", "#242A30");
  $(".modal-content").css("color", "white");
  $("#darkMode").parent().addClass("active");
  $("#whiteMode").parent().removeClass("active");
  $(".card").css("background", "#1c2126");
  return theme = "dark";
};

changeToLightTheme = function() {
  $("body").css("background", "white");
  $("h1").css("color", "#212529");
  $("p").css("color", "#212529");
  $(".modal-content").css("background", "white");
  $(".modal-content").css("color", "#212529");
  $("body").css("color", "unset");
  $(".card").css("background", "white");
  return theme = "light";
};

$("#darkMode").parent().on("click touchsstart", function() {
  return changeToDarkTheme();
});

$("#lightMode").parent().on("click touchsstart", function() {
  return changeToLightTheme();
});

$("#saveSettings").on("click touchsstart", function() {
  return localStorage.setItem('theme', theme);
});

$(document).ready(function() {
  if (localStorage.getItem('theme') === "dark") {
    return changeToDarkTheme();
  } else {
    return changeToLightTheme();
  }
});
