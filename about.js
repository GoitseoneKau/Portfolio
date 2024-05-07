
    //For About Page
//about-certificates js for Qualifications
let certificateLinks = {
    "Beginner in Web Development &nbsp &nbsp &nbsp Module 1(<b>HTML,CSS,Design</b>)":
    "https://www.upskillist.com/certificate/en/XkZcVyzh/unh0m8xa56lrab1awypunh0z40cp9uww",
  
    "Intermediate in Web Development  Module 2(<b>Javascript,UI/UX</b>)":
    "https://www.upskillist.com/certificate/en/nJlA494U/93f0qy0bbu8l15f9n793f0qy0krj5y6i",
  
    "Advanced in Web Development &nbsp &nbsp &nbspModule 3(<b>PHP & MySQL</b>)":
    "https://www.upskillist.com/certificate/en/tT7CRe7l/el10g9oga5r091xokel10g9sglqod9tz",
  
    "Proficient in Web Development &nbsp&nbsp&nbsp&nbsp Module 4(<b>CSS,HTML,PHP & MySQL,JS/PHP Frameworks</b>)":
    "https://www.upskillist.com/certificate/en/dEnQaPgH/yy9v5ye2hhpsykjay0wmzyy9v58m0fb3"
  };
  
  
  let certificatesParent = document.getElementsByClassName("certificates");
  
  Object.keys(certificateLinks).forEach(key=>{
    let certificate = `<a href="${certificateLinks[key]}">${key}</a>`;
    let certList = document.createElement("li");
    certList.innerHTML = certificate;
    certificatesParent.item(0).appendChild(certList);
  })


  window.onload=()=>{
    //Goitseone Kau-JS for sliding images
    const sliders = document.querySelectorAll(".projects-s>div.slide>.image");
    const btnLeft = document.getElementById("left");
    const btnRight = document.getElementById("right");
   
    let activeSlide = 0;
  //Function to slide images or set the acvtive image
    function setImageSlide(){
    sliders.forEach((slides)=>slides.classList.remove("active"));//get all related elements as a list/array and clear the active class
    sliders[activeSlide].classList.add("active");//get the specific element that needs to be shown from list and add active class
    }

    //Function to increase activeSlide and navigate to next image
    //untill it reaches last index and change activeSlide to first index, to transition to next first image
    function nextSlide(){
    activeSlide++;
    if(activeSlide>sliders.length-1){
        activeSlide=0;
    }
    }

    //Function to decrease activeSlide and navigate to previous image
    //untill it reaches first index and change activeSlide to last index, to transition to previous last image
    function prevSlide(){
    activeSlide--;
    if(activeSlide<0){
        activeSlide=sliders.length-1;
    }
    }

  //add onclick event for the right button
  //place nextSlide function-N.B must be before setImageSlide function to update the activeSlide vaariable for smooth transition
    btnRight.onclick = ()=>{
    nextSlide();
    setImageSlide();
    }

  //add onclick event for the left button
  //place prevSlide function-N.B must be before setImageSlide function to update the activeSlide vaariable for smooth transition
    btnLeft.onclick = ()=>{
    prevSlide();
    setImageSlide();
    }



    let image = document.querySelectorAll(".projects>div.slide>.image");
    let slide = document.querySelector(".slide");
    image.forEach((imgDiv)=>{
      imgDiv.addEventListener("click",()=>{
        if(slide.style.animationPlayState=="paused"){
          slide.style.animationPlayState = "running";
        }else{
          slide.style.animationPlayState= "paused";
        }
      });
      
    });

    if(window.innerWidth<=850){
      slide.style.animation
    }

  }

 
  