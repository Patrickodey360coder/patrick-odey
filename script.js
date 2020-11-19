//for nav scrool behaviour
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
            'I enjoy skateboarding',
            "I watch comedy when I'm not coding"
          ],
  typeSpeed: 30,
  backSpeed: 30,
  loop:      true 
});

