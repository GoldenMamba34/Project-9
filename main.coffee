theme = "light"

changeToDarkTheme = ->
  $("body").css("background", "#242A30")
  $("body").css("color", "white")
  $("h1").css("color", "white")
  $("p").css("color", "white")
  $(".modal-content").css("background", "#242A30")
  $(".modal-content").css("color", "white")
  $("#darkMode").parent().addClass("active")
  $("#whiteMode").parent().removeClass("active")

  theme = "dark"
changeToLightTheme = ->
  $("body").css("background", "white")
  $("h1").css("color", "#212529")
  $("p").css("color", "#212529")
  $(".modal-content").css("background", "white")
  $(".modal-content").css("color", "#212529")
  $("body").css("color", "unset")

  theme = "light"

$("#darkMode").parent().on("click touchsstart", ->
  changeToDarkTheme()
  )
$("#lightMode").parent().on("click touchsstart", ->
  changeToLightTheme()
  )
$("#saveSettings").on("click touchsstart", ->
  localStorage.setItem('theme', theme);
  )
$(document).ready(->
  if localStorage.getItem('theme') is "dark"
    changeToDarkTheme()
  else
    changeToLightTheme()
  )
