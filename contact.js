
let form = document.getElementById("contactForm");

    function handleSubmit(event) {
        event.preventDefault();
        //Form
        //For Contact Me Page
      
        let lastName =  document.getElementById("lname");
        let firstName = document.getElementById("fname");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        let isvalidEMail = email.value.trim() !==""  && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
        let isvalidMessage = message.value.trim() !=="";
        let isvalidFname = firstName.value.trim() !=="";
        let isvalidLname = lastName.value.trim() !=="";
    
        let isvalidForm=isvalidEMail&&isvalidFname&&isvalidLname&&isvalidMessage;

    if (isvalidForm==true) {
        var data = new FormData(event.target);
        fetch("https://formspree.io/f/xkndkvgg", {
            method: "POST",
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
        });

    } if(isvalidForm==false) {
            let invalidRed ="0 0 10px red";
            

            //email 
            if (isvalidEMail==false) {
                let alertEmail = document.createElement("span");
            alertEmail.style.color="red";
            alertEmail.innerText ="not valid";
                email.style.boxShadow = invalidRed;
                email.parentElement.appendChild(alertEmail);
            }
            

            //message
            if (isvalidMessage==false) {
                let alertMessage = document.createElement("span");
                alertMessage.style.color="red";
                alertMessage.innerText ="not valid";
                message.style.boxShadow = invalidRed;
                message.parentElement.appendChild(alertMessage);
            }
            

            //first name error   
            if (isvalidFname==false) {
                let alertFname = document.createElement("span");
            alertFname.style.color="red";
            alertFname.innerText ="not valid";
                firstName.style.boxShadow = invalidRed;
                firstName.parentElement.appendChild(alertFname);
            }
            
            //last name error
            if(isvalidLname==false) {
                let alertLname = document.createElement("span");
            alertLname.style.color="red";
            alertLname.innerText ="not valid";
                lastName.style.boxShadow = invalidRed;
                lastName.parentElement.appendChild(alertLname);
            }
            
    }
    }
//add function to event handler 
form.addEventListener("submit", handleSubmit)

