(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     var naogaon = {lat: 24.9132, lng: 88.7531};
    $('.map')
      .gmap3({
        zoom: 16,
        center: naogaon
      })
        .marker({
        
        position: naogaon
      })
      .infowindow({
        position: naogaon,
        content: "Hello from Naogaon",
        pixelOffset: new google.maps.Size(0,-40)
      })
      .then(function (infowindow) {
        infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
      });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	