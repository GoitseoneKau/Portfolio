

window.onload=()=>{
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


let address = document.getElementById("address");
let addressHTML =`<h4>Address :</h4>
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



}