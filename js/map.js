let myMap;
const init = () => {
 myMap = new ymaps.Map("map", {
    center: [34.687007, 33.036272],
    zoom: 11,
    controls: [],
  });
  
  let coords = [
      [34.670740, 33.039237],
      [34.681929, 33.051514],
      [34.693166, 33.082867],
      [34.703852, 33.048932],
    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: '../img/svg/marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
   });
 
 for (let i = 0; i < coords.length; i++) {
   myCollection.add(new ymaps.Placemark(coords[i]));
 }
 
 myMap.geoObjects.add(myCollection);
 
 myMap.behaviors.enable('scrollZoom');
};
 
ymaps.ready(init);