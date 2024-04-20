//nav js
let nav = document.getElementById("navList");
let btnNav = document.getElementById("menuBurger");

btnNav.onclick =function(){
    nav.classList.toggle("show");
    btnNav.classList.toggle("btnActive");
};

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
});

//about-certificates js
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
  let cert = `<a href="${certificateLinks[key]}">${key}</a>`;
  let certli = document.createElement("li");
  certli.innerHTML = cert;
  certificatesParent.item(0).appendChild(certli);
})
