// document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Angela"
document.querySelector("ul").lastElementChild.innerHTML = "Woohoo";

document.getElementsByTagName("li")[2].style.color = "purple";
document.getElementsByTagName("li").length;

document.getElementsByClassName("btn").length;

// single element
document.getElementById("title").innerHTML = "goodbye"; 


// these always get the FIRST
// query for first h1
document.querySelector("h1");
// combining selectors like css
document.querySelector("li a");
// and more specific selector
document.querySelector("li.item");
// hierarchical selector
document.querySelector("#list a");

// to get all of them...use 
document.querySelectorAll("item");

// example usage
document.querySelector("li a").style.color = "red";
