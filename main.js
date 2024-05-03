    //nav js
    let nav = document.getElementById("navList");
    let btnNav = document.getElementById("menuBurger");
    let btnClose =document.querySelector("li.close-link>span.fa-xmark");
    
    btnNav.onclick =function(){  
      nav.classList.remove("hide");
      nav.classList.add("show");
      this.classList.toggle("btnAcvtive")
    };

    btnClose.onclick=function(){
      nav.classList.add("hide");
    }
  

   mapLoad();
  function mapLoad(){
    //map js
    const map = new ol.Map({

      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map',
      view: new ol.View({
        center: [3137997.9860769473, -2967629.4046578244],
        zoom: 14,
        maxZoom:16,
        minZoom:8
      })

    });
  }


  let address = document.getElementById("address");
  let addressHTML =`<h4 class="work-sans-400">Address :</h4>
  Mabopane<br>
  Pretoria, Gauteng, 0190 <br>
  South Africa`;
  address.innerHTML = addressHTML;
  //social media
  let awesomeIcons =["fa-brands fa-square-whatsapp fa-2xl","fa-brands fa-linkedin fa-2xl","fa-brands fa-square-github fa-2xl"];

  let social_links = {
    "https://wa.me/+27812702638":awesomeIcons[0],
    "https://www.linkedin.com/in/goitseone-kau-65752511a/":awesomeIcons[1],
    "https://github.com/GoitseoneKau":awesomeIcons[2]
  };


  let socialMedia = document.getElementById("social-media");

  Object.keys(social_links).forEach((links)=>{
    let a = document.createElement("a");
    let i = document.createElement("i");
    i.classList += social_links[links];
    a.href=links;
    a.appendChild(i);
    socialMedia.appendChild(a);
  });



