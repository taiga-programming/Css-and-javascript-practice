const texts = ["My name is taiga welcome to this website" ];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type() {
  
  if(count === texts.length){
      count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  
  const hidden = document.getElementById("typing");

  document.querySelector(".typing").textContent = letter;
  if(letter.length === currentText.length) {
    count++;
    // index = 0;
     // document.getElementById("hoge").style.display="none";
    
    // javascript for display none
    var items = document.querySelectorAll('.container');

    items.forEach((item)=> {

      item.addEventListener('mouseover', function(){

        var link = item.querySelector('.intro');

        link.style.display = "none";
      });

      item.addEventListener('mouseleave', function(){

        var link = item.querySelector('.intro');

        link.style.color= "flex";
      });
    });
  }
  setTimeout(type, 300);
})();

/*document.querySelector(".intro")*/

