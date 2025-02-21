document.addEventListener("DOMContentLoaded", function(){
  const hamburger = document.querySelector(".hamburger");


  let isClicked = false;


  hamburger.addEventListener("click", toggleMenu);


  function toggleMenu(){
    if(!isClicked){
      hamburger.classList.add("slide");
      isClicked = true;
    }
    else {
      hamburger.classList.remove("slide");
      isClicked = false;
    }
  }
 
});