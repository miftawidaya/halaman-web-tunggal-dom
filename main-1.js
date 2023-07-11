// in main.js

console.log(location.hash)

// This will listen for the fragment identifier change
window.addEventListener("hashchange", function() {
  console.log(location.hash);
});

// in main.js

window.addEventListener("hashchange", function (){
  var contentDiv = document.getElementById("app");
  contentDiv.innerHTML = location.hash;
});

// in main.js
function loadContent(){
  var contentDiv = document.getElementById("app");
  contentDiv.innerHTML = location.hash;
}

window.addEventListener("hashchange", function (){
  loadContent();
});

loadContent();

// in main.js
function loadContent(){
  var contentDiv = document.getElementById("app");
  contentDiv.innerHTML = location.hash;
}


window.addEventListener("hashchange", loadContent);

loadContent();