function myFunction() {
    var element = document.querySelector(".switch");
    var spnav = document.querySelector(".sp-nav");
    var header = document.querySelector(".header");
    header.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflowY="hidden";
    spnav.style.left = "0";
    //element.classList.toggle("mystyle");
    // element.classList.remove("switch");
    // element.classList.add("exit-button");
    // document.querySelector(".switch__line--4").style.display = "none"
    // console.log(element);
    // element.classList.add("mystyle");
 }

 function myFunction2() {
   document.getElementsByTagName("body")[0].style.overflowY="scroll";
    var spnav = document.querySelector(".sp-nav");
    var header = document.querySelector(".header"); 
    header.style.display = "flex";
//  spnav.style.display = "none";
    spnav.style.left = "-100vw";
 }

 

