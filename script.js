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
    strings: ['I write scalable and responsive websites and web applications',
              'My communication skills are pretty amazing',
              'I am open to learning new technologies'
            ],
    typeSpeed: 30,
    backSpeed: 30,
    loop:      true 
  });
}


let form = document.getElementById('form');
let email  = document.getElementById('email');
let message = document.getElementById('message');
form.addEventListener('submit', function(e){
  e.preventDefault();
  if(email.value != "" && message.value != ""){
    swal({
      title: "Thanks!",
      text: "You message has been sent!",
      icon: "success",
      button: "Aww yass!",
    });
  }
  else {
    swal({
      title: "Failed",
      text: "The email and message fields are required!",
      icon: "error",
      button: "Try Again",
    });
  }
});
