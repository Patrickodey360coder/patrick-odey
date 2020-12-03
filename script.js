//for nav scrool behaviour
window.onload = (e)=> {
  var navbar = document.getElementById('navbar');
  window.onscroll = ()=>{
    "use strict";
    if(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100){
      navbar.classList.add("nav-colored");
      navbar.classList.remove("nav-transparent");
    }else{
      navbar.classList.remove("nav-colored");
      navbar.classList.add("nav-transparent");
    }
  };

  let typed = new Typed('.type', {
    strings: ['I write scalable and responsible website and applications',
              'My communication skills are pretty amazing',
              'I am open to learning new technologies'
            ],
    typeSpeed: 30,
    backSpeed: 30,
    loop:      true 
  });
}