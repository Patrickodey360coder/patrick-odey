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
    strings: ['I write scalable and responsible websites and applications',
              'My communication skills are pretty amazing',
              'I am open to learning new technologies'
            ],
    typeSpeed: 30,
    backSpeed: 30,
    loop:      true 
  });
}

// let submit = document.getElementById('submit');
// let email  = document.getElementById('email').value;
// let message = document.getElementById('message').value;
// submit.addEventListener('click', (evt)=>{
//     evt.preventDefault();
//   swal({
//     title: "Thanks!",
//     text: "You message has been sent!",
//     icon: "success",
//     button: "Aww yass!",
//   });
// });



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
    document.getElementById('email').value=null;
    document.getElementById('message').value=null;
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

