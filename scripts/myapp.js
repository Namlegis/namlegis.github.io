// Creation of variables so the code is easier to read
const head = document.querySelector("header");
const nav = document.querySelector("nav");
const breakLine = document.querySelector(".break-line");
const lineQuery = window.matchMedia("(max-width:1200px)");

window.onscroll = function(){shrinkHeader()};

//When the user goes below a certain height: the header shrinks, the nav disappears, and the bottom border
function shrinkHeader(){
    if (document.body.scrollTop > 88 || document.documentElement.scrollTop > 88) {
        //Changes the styling AFTER the page has scrolled 88px
        head.style.padding = "1rem 0";
        nav.style.display = "none"; 
        head.style.boxShadow = "0 .3rem 1rem #084A5E";
        breakLine.style.display = "none"
        console.log("no");
    } else {
        //Reverts the styling once scrolled back to the top
        head.style.padding = "4rem 0";
        nav.style.display = "flex";
        head.style.boxShadow = "0 0";
        breakLine.style.display = "block"
    }
    //This makes sure the orange breakline doesn't come back on the mobile version
    if (lineQuery.matches) {
        //if the page is smaller than 1200px
        breakLine.style.display = "none";
        console.log("yes");
    }
}

function scrollUp() {
    //Scrolls the page to the top when the button in the footer is clicked
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }