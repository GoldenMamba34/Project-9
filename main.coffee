theme = "light"

changeToDarkTheme = ->
  $("body").css("background", "rgb(10,10,10)")
  $("body").css("color", "white")
  $("h1").css("color", "white")
  $("p").css("color", "white")
  $(".modal-content").css("background", "rgb(10,10,10)")
  $(".modal-content").css("color", "white")
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
