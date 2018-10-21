var changeToDarkTheme, changeToLightTheme, theme;

theme = "light";

changeToDarkTheme = function() {
  $("body").css("background", "rgb(10,10,10)");
  $("body").css("color", "white");
  $("h1").css("color", "white");
  $("p").css("color", "white");
  $(".modal-content").css("background", "rgb(10,10,10)");
  $(".modal-content").css("color", "white");
  theme = "dark";
};

changeToLightTheme = function() {
  $("body").css("background", "white");
  $("h1").css("color", "#212529");
  $("p").css("color", "#212529");
  $(".modal-content").css("background", "white");
  $(".modal-content").css("color", "#212529");
  $("body").css("color", "unset");
  theme = "light";
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
