

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



}