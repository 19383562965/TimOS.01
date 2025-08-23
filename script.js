const body = document.getElementById("body");

const controlCenter = document.getElementById("control-center");
const controlCenterBtn = document.getElementById("control-center-btn");

controlCenterBtn.onclick = function() {
  if(controlCenter.style.display === "none") {
    controlCenter.style.display = "flex"
  }
  else {
    controlCenter.style.display = "none"
  }
}

const wallpaper = document.getElementById("wallpaper");
const wallpaperOne = document.getElementById("wallpaper-one");
const wallpaperTwo = document.getElementById("wallpaper-two");
const wallpaperThree = document.getElementById("wallpaper-three");
const wallpaperFour = document.getElementById("wallpaper-four");
const wallpaperFive = document.getElementById("wallpaper-five");
const wallpaperSix = document.getElementById("wallpaper-six");
const wallpaperSeven = document.getElementById("wallpaper-seven");
const wallpaperEight = document.getElementById("wallpaper-eight");
const wallpaperNine = document.getElementById("wallpaper-nine");

wallpaper.onclick = function() {body.style.backgroundImage = "url('images/background.jpg')"}
wallpaperOne.onclick = function() {body.style.backgroundImage = "url('images/background_one.jpg')"}
wallpaperTwo.onclick = function() {body.style.backgroundImage = "url('images/background_two.jpg')"}
wallpaperThree.onclick = function() {body.style.backgroundImage = "url('images/background_three.jpg')"}
wallpaperFour.onclick = function() {body.style.backgroundImage = "url('images/background_four.jpg')"}
wallpaperFive.onclick = function() {body.style.backgroundImage = "url('images/background_five.jpg')"}
wallpaperSix.onclick = function() {body.style.backgroundImage = "url('images/background_six.jpg')"}
wallpaperSeven.onclick = function() {body.style.backgroundImage = "url('images/background_seven.jpg')"}
wallpaperEight.onclick = function() {body.style.backgroundImage = "url('images/background_eight.jpg')"}
wallpaperNine.onclick = function() {body.style.backgroundImage = "url('images/background_nine.jpg')"}