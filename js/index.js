/*preloader*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(1000).animate({
        height: '0',
        opacity: '0'
    }, "2000");
    $('#preloader').fadeOut("slow");
});

/*--TEAM_SLIDE--*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            }
           
        }

    });
});
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });
});

/*--RESPONSIVE_TABS--*/
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*--PORTFOLIO--*/
$(window).on('load', function () {
    $("#isotope-container").isotope({

    });
    $("#isotope-filters").on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: filterValue
        });
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });



});

$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$(function () {
    $("#testemonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/*--Clients--*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});

/*--NAV--*/
$(function () {
    hideNav();
    $(window).scroll(function () {
        hideNav();
    });

    function hideNav() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");
            $("#back-to-top").fadeOut();
        }
    }
});

/*--SCROLL--*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html , body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 2000, "easeInOutExpo");
    });
});