/*global $:false */
/*global console:false */
window.onload = function(){
  'use strict';
  var btn_el = $('.btn-navbar')[0];
  $(btn_el).click(function() {
    $('.carousel-control').each(function(indx, elmnt){
      console.dir(elmnt.attributes);
      if(elmnt.attributes.style === undefined)
        $(elmnt).css('display','none');
      else
        $(elmnt).removeAttr('style');
    });
  });
};
