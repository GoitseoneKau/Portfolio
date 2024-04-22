

window.onload=()=>{
  //nav js
let nav = document.getElementById("navList");
let btnNav = document.getElementById("menuBurger");

btnNav.onclick =function(){
    nav.classList.toggle("show");
    btnNav.classList.toggle("btnActive");
};
/*
//map js
var map = new ol.Map({
layers: [
  new ol.layer.Tile({
    source: new ol.source.OSM()
  })
],
target: 'map',
view: new ol.View({
  center: [13,4737, -4703],
  zoom: 5
})
});*/



//For Contact Me Page
//Form
let form = document.getElementById("contactForm");
let lastName =  document.getElementById("lname");
let firstName = document.getElementById("fname");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let btnSubmit = document.getElementById("submit");

  //disable submit button
  btnSubmit.disabled = true;
  btnSubmit.style.opacity = 0.6;

//validity styles
  let validGreen = " 0 0 15px green";
  let invalidRed = " 0 0 15px red";

//email
email.onblur = () => {
  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let isvalidEMail = email.value.trim() !==""  && pattern.test(email.value);
  let alert = document.createElement("p");
  alert.id="alert";
  
 
  if (isvalidEMail) {
    email.style.boxShadow = validGreen;
    if(email.parentElement.lastChild.nodeValue=="not valid"){email.parentElement.lastChild.remove();}
  
  } else {
    email.style.boxShadow = invalidRed;
    alert.innerText ="not valid";
    email.parentElement.appendChild(alert);
  }
}

//message
message.onblur = () => {
  let isvalidMessage = message.value.trim() !=="";
  if (isvalidMessage) {
    message.style.boxShadow = validGreen;
  } else {
    message.style.boxShadow = invalidRed;
  }
}

//first name
firstName.onblur = () => {
  let isvalidFname = firstName.value.trim() !=="";
  if (isvalidFname) {
    firstName.style.boxShadow = validGreen;
  } else {
    firstName.style.boxShadow = invalidRed;
  }
}
//last name
lastName.onblur = () => {
  let isvalidLname = lastName.value !=="";
  if (isvalidLname==true) {
    lastName.style.boxShadow = validGreen;
  
  } 
  if(isvalidLname==false) {
    lastName.style.boxShadow = invalidRed;

  }
}

async function handleSubmit(event) {
  event.preventDefault();
  
  //validity 
  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let isvalidEMail = email.value.trim() !==""  && pattern.test(email.value);
  let isvalidMessage = message.value.trim() !=="";
  let isvalidFname = firstName.value.trim() !=="";
  let isvalidLname = lastName.value !=="";
  let isvalidForm;

  let alert = document.createElement("span");
    alert.innerText ="not valid";
  if (isvalidEMail) {
    alert.innerText ="valid";
    email.parentElement.appendChild(alert);
    
  } else {
   
    email.parentElement.appendChild(alert);
  }


  /*if (allvalid) {
    
  } else {
    var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
  }*/
}
//add function to event handler 
form.addEventListener("submit", handleSubmit)


}