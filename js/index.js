
 /*preloader*/
 $(window).on('load',function() {
     $('#status').fadeOut();
     $('#preloader').delay(1000).animate({ height: '0',opacity:'0'},"2000");
     $('#preloader').fadeOut("slow");
 });

 /*--TEAM_SLIDE--*/
 $(function(){
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

    });
  });