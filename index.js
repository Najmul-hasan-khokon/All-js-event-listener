// app er sob kichu load holei background red hobe
window.addEventListener("load", () => {
  document.querySelector(".murkup_load").style.background = "red";
});

// window er sob kichi load howar por app er je kono jaygay click korle
window.addEventListener("click", () => {
  document.querySelector(".click_event").style.background = "blue";
});

// app scroll korle event run hoye color red korbe.
document.addEventListener("scroll", () => {
  document.querySelector(".scroll_event").style.color = "red";
  // console.log("red");
});

// textarea te kich paste korlei event call hoye text color red korbe
document.addEventListener("paste", () => {
  document.querySelector(".paste_event").style.color = "red";
});

// text copy korle event call hoye background purple kore dibe
document.addEventListener("copy", () => {
  document.querySelector(".copy_event").style.background = "purple";
});

// kono kichu cut korle text color red hobe
document.addEventListener("cut", () => {
  document.querySelector(".cut_event").style.color = "red";
});

//  mouse click kore input focus korle text red hobe
document.querySelector(".focus_event").addEventListener("focus", () => {
  document.querySelector(".after_focus_input").style.color = "red";
});

// input e focus in and out korle
document.querySelector(".focusOut_event").addEventListener("focusout", () => {
  document.querySelector(".after_focusInAndOut_input").style.color = "blue";
});
document.querySelector(".focusOut_event").addEventListener("focusin", () => {
  document.querySelector(".after_focusInAndOut_input").style.color = "green";
});

// keyboard er jekono key press korle . evabe keyup , keydown ache
document.addEventListener("keypress", () => {
  document.querySelector(".keypress_event").style.color = "red";
});

// document er je kono jaygay dobble click
document.addEventListener("dblclick", () => {
  document.querySelector(".dubbleClick_event").style.color = "red";
});

//text select kore mouse diye dragenDrop korle blue
document.querySelector(".dragenDrop_event").addEventListener("drag", () => {
  document.querySelector(".dragenDrop_event").style.color = "blue";
});

// browser window choto boro korle
window.addEventListener("resize", () => {
  document.querySelector(".resize_event").style.background = "yellow";
});

// data on theke off kore dile offline event chalu hoye red hobe
window.addEventListener("offline", () => {
  document.querySelector(".offline_event").style.background = "red";
});

// data off theke on kore dile online event chalu hoye blue hobe
window.addEventListener("online", () => {
  document.querySelector(".online_event").style.background = "blue";
});

// data off theke on kore dile online event chalu hoye blue hobe
window.addEventListener("", () => {
  document.querySelector(".online_event").style.background = "blue";
});

/**
 * another event listener
 * error
   pagehide
   pageshow
   blur
   pause
   play
   reset 
   select
   submit 
 */
