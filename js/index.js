
 /*preloader*/
 $(window).on('load',function() {
     $('#status').fadeOut();
     $('#preloader').delay(1000).animate({ height: '0',opacity:'0'},"2000");
     $('#preloader').fadeOut("slow");
 });