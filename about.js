
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
  }