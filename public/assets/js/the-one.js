/*
  [JS Index]
  
  ---
  
  Template Name: The One || Responsive One Page HTML Template
  Author:  ex-nihilo
  Version: 1.4
*/


/*
  1. preloader
  2. fadeIn
    2.1. fadeIn.element
    2.2. fadeIn.borders
    2.3. fadeIn.hero
	2.4. drag.Intro
  3. facts counter
  4. forms
    4.1. contact form
    4.2. newsletter form
  5. location modal
    5.1. location modal additional CLOSER
  6. contact modal
    6.1. contact modal additional CLOSER
  7. menu
  8. owl carousel
    8.1. owl news carousel
	8.2. owl about carousel
	8.3. owl services carousel
	8.4. owl works carousel
	8.5. owl home IMG carousel slider
	8.6. owl home IMG gallery carousel
  9. magnificPopup
    9.1. magnificPopup image
	9.2. magnificPopup image gallery
	9.3. magnificPopup video
  10. toggle credits content
    10.1 toggle credits content additional CLOSER
  11. YouTube player
  12. Vimeo player
  13. slick slider
    13.1. slick fullscreen slider, slick fullscreen multiple slider
	13.2. slick fullscreen slideshow
	13.3. slick fullscreen SPLIT slider
	13.4. slick fullscreen slideshow ZOOM/FADE
	13.5. slick fullscreen slider ZOOM/SLIDE
  14. typed text
  15. swiper
    15.1. swiper thumbnail slider horizontal thumbs
    15.2. swiper thumbnail slider vertical thumbs
	15.3. swiper timeline slider
	15.4. swiper parallax slider
  16. instafeed
  17. toggle instagram feed content
    17.1. toggle instagram feed content additional CLOSER
  18. drag intro
  19. YouTube player 2
  20. google maps POSITION
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn
        // 2.1. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(1200).css({
                display: "none"
            }).fadeIn(1200);
        }, 0);
        // 2.2. fadeIn.borders
        setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 800);
        setTimeout(function() {
            $(".border-bottom-menu, .border-bottom, .border-YT").removeClass("bottom-position");
        }, 800);
		setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 800);
		setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 800);
        // 2.3. fadeIn.hero
        setTimeout(function() {
            $(".hero-bg").addClass("hero-bg-show");
        }, 400);
		// 2.4. drag.Intro
		setTimeout(function() {
            $("#drag-intro");
        }, 1000);
        setTimeout(function() {
            dragIntroduction();
        }, 2000);
    });
	
    // 3. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 4. forms
    // 4.1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
    // 4.2. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        $.post("subscribe.php");
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
    // 5. location modal
    $(".location-modal-launcher").on("click", function() {
        if ($(".location-modal").hasClass("open")) {
            $(".location-modal").removeClass("open");
            $(".location-modal").addClass("close");
        } else {
            $(".location-modal").removeClass("close");
            $(".location-modal").addClass("open");
        }
    });
    // 5.1. location modal additional CLOSER
    $("#menu li a, #menu-mobile li a, .contact-modal-launcher").on("click", function() {
        $(".location-modal, .panel-left-credits, .panel-right-credits, .panel-left-instagram-feed, .panel-right-instagram-feed").removeClass("open");
        $(".location-modal, .panel-left-credits, .panel-right-credits, .panel-left-instagram-feed, .panel-right-instagram-feed").addClass("close");
    });
	
    // 6. contact modal
    $(".contact-modal-launcher").on("click", function() {
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open");
            $(".contact-modal").addClass("close");
        } else {
            $(".contact-modal").removeClass("close");
            $(".contact-modal").addClass("open");
        }
    });
    // 6.1. contact modal additional CLOSER
    $("#menu li a, #menu-mobile li a, .location-modal-launcher").on("click", function() {
        $(".contact-modal, .panel-left-credits, .panel-right-credits, .panel-left-instagram-feed, .panel-right-instagram-feed").removeClass("open");
        $(".contact-modal, .panel-left-credits, .panel-right-credits, .panel-left-instagram-feed, .panel-right-instagram-feed").addClass("close");
    });
	
    // 7. menu
    $("#menu li a, #menu-mobile li a").on("click", function(e) {
        e.preventDefault();
        animateSlider(this.hash);
    });
    function animateSlider(hash) {
        if (!$("#containerOT div.open").length) {
            if (hash == "#news") {
                openPopup(hash);
            }
            if (hash == "#about") {
                openPopup(hash);
            }
            if (hash == "#services") {
                openPopup(hash);
            }
            if (hash == "#works") {
                openPopup(hash);
            }
        } else {
            if (hash == "#home") {
                openAndClose(hash)
            }
            if (hash == "#news") {
                openAndClose(hash)
            }
            if (hash == "#about") {
                openAndClose(hash)
            }
            if (hash == "#services") {
                openAndClose(hash)
            }
            if (hash == "#works") {
                openAndClose(hash)
            }
        }
    }
    function openPopup(hash) {
        $(hash + "-lifting").slideToggle().addClass("open");
    }
    function openAndClose(hash) {
        if ($(hash + "-lifting").hasClass("open")) {
            $($(hash + "-lifting")).slideToggle().removeClass();
        } else {
            $("#containerOT div.open").slideToggle().removeClass();
            $(hash + "-lifting").slideToggle().addClass("open");
        }
    }
	
    // 8. owl carousel
    // 8.1. owl news carousel
    $("#news-carousel").owlCarousel({
        loop: true,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // 8.2. owl about carousel
    $("#about-carousel").owlCarousel({
        loop: true,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-about',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // 8.3. owl services carousel
    $("#services-carousel").owlCarousel({
        loop: true,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-services',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // 8.4. owl works carousel
    $("#works-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-works',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // 8.5. owl home IMG carousel slider
    $("#home-page-img-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
	// 8.6. owl home IMG gallery carousel
    $("#home-page-img-gallery-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 2,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 2
            }
        }
    });
	
    // 9. magnificPopup
    // 9.1. magnificPopup image
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        },
        removalDelay: 100,
        mainClass: "mfp-fade"
    });
    $(".popup-photo-news").magnificPopup({
        type: "image",
        gallery: {
            enabled: false
        },
        removalDelay: 100,
        mainClass: "mfp-fade"
    });
    // 9.2. magnificPopup image gallery
    $(".popup-gallery-slider").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
			removalDelay: 100,
			mainClass: "mfp-fade"
        });
    });
    // 9.3. magnificPopup video
    $(".popup-youtube, .popup-vimeo").magnificPopup({
        type: "iframe",
        disableOn: 700,
        preloader: false,
        fixedContentPos: false,
        removalDelay: 100,
        mainClass: "mfp-fade"
    });
	
    // 10. toggle credits content
    $(".toggle-credits-content").on("click", function() {
        if ($(".panel-left-credits, .panel-right-credits").hasClass("open")) {
            $(".panel-left-credits, .panel-right-credits").removeClass("open");
            $(".panel-left-credits, .panel-right-credits").addClass("close");
        } else {
            $(".panel-left-credits, .panel-right-credits").removeClass("close");
            $(".panel-left-credits, .panel-right-credits").addClass("open");
        }
    });
    // 10.1 toggle credits content additional CLOSER
    $(".toggle-credits-content").on("click", function() {
        $(".location-modal, .contact-modal, .panel-left-instagram-feed, .panel-right-instagram-feed").removeClass("open");
        $(".location-modal, .contact-modal, .panel-left-instagram-feed, .panel-right-instagram-feed").addClass("close");
    });
	
    // 11. YouTube player
    $("#background-video").YTPlayer({
        videoId: "L1AlSzF1eSY", // DEMO URL is: https://www.youtube.com/watch?v=r8j-MWq4HZc
        mute: true,             // options: true, false
        pauseOnScroll: false,
        repeat: true,
        fitToBackground: true,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: "transparent",
            branding: 0,
            rel: 0,
            autohide: 0
        }
    });
	
    // 12. Vimeo player
	// updated: now you can add Vimeo videos via HTML file
	
    // 13. slick slider
    // 13.1. slick fullscreen slider, slick fullscreen multiple slider
    $(".slick-fullscreen").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 800,
        draggable: true,
        dots: true,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    // 13.2. slick fullscreen slideshow
    $(".slick-fullscreen-slideshow").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: true,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    // 13.3. slick fullscreen SPLIT slider
    $(".slick-fullscreen-split").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 800,
        draggable: true,
        dots: true,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	// 13.4. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: true,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    // 13.5. slick fullscreen slider ZOOM/SLIDE
    $(".slick-fullscreen-slider-zoom").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 800,
        draggable: true,
        dots: true,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false,
		lazyLoad: "progressive",
    }).slickAnimation();
	
    // 14. typed text
    $(".typed-title").typed({
        strings: ["Fully Responsive", "Creative Portfolio", "Made for KINGS"],
        typeSpeed: 25,
        backDelay: 3500,
        loop: true
    });
	
    // 15. swiper
    // 15.1. swiper thumbnail slider horizontal thumbs
    var swipersliderTop = new Swiper(".swiper-slider-top", {
        direction: "vertical",
		nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoplay: 4000,
        speed: 1600,
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: true,
        keyboardControl: true
    });
    var swipersliderBottom = new Swiper(".swiper-slider-bottom", {
		direction: "horizontal",
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
		mousewheelControl: true,
        keyboardControl: true
    });
    swipersliderTop.params.control = swipersliderBottom;
    swipersliderBottom.params.control = swipersliderTop;
	// 15.2. swiper thumbnail slider vertical thumbs
    var swipersliderTopthumbsVertical = new Swiper(".swiper-slider-top-thumbs-vertical", {
        direction: "horizontal",
		nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoplay: 4000,
        speed: 1600,
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        // loop: true,
        slideToClickedSlide: true,
        mousewheelControl: true,
        keyboardControl: true
    });
    var swipersliderBottomthumbsVertical = new Swiper(".swiper-slider-bottom-thumbs-vertical", {
		direction: "vertical",
        spaceBetween: 10,
        centeredSlides: true,
        // slidesPerView: "auto",
		slidesPerView: 7,
        touchRatio: 1,
        // loop: true,
        slideToClickedSlide: true,
		mousewheelControl: true,
        keyboardControl: true
    });
    swipersliderTopthumbsVertical.params.control = swipersliderBottomthumbsVertical;
    swipersliderBottomthumbsVertical.params.control = swipersliderTopthumbsVertical;
    // 15.3. swiper timeline slider
    var timelineSwiper = new Swiper(".timeline .swiper-container", {
        direction: "vertical",
        autoplay: false,
        speed: 1600,
        spaceBetween: 0,
        loop: false,
        mousewheelControl: true,
        keyboardControl: true,
        pagination: ".swiper-pagination",
        paginationBulletRender: function(swiper, index, className) {
            var year = document.querySelectorAll(".swiper-slide")[index].getAttribute("data-year");
            return '<span class="' + className + '">' + year + '</span>';
        },
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true,
        breakpoints: {
            768: {
                direction: "horizontal",
            }
        }
    });
    // 15.4. swiper parallax slider
    var swiper = new Swiper(".parallax .swiper-container", {
        autoplay: 4000,
        speed: 800,
        parallax: true,
        mousewheelControl: true,
        keyboardControl: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true
    });
	
    // 16. instafeed
    var userFeed = new Instafeed({
        get: "user",
        userId: "5975086331", // Instagram User ID
        accessToken: "5975086331.1677ed0.5c991b59366a426fadf3e868310cc56b", // Instagram Access Token
        limit: 10,
        resolution: "standard_resolution",
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    });
    userFeed.run();
	
    // 17. toggle instagram feed content
    $(".toggle-instagram-feed-content").on("click", function() {
        if ($(".panel-left-instagram-feed, .panel-right-instagram-feed").hasClass("open")) {
            $(".panel-left-instagram-feed, .panel-right-instagram-feed").removeClass("open");
            $(".panel-left-instagram-feed, .panel-right-instagram-feed").addClass("close");
        } else {
            $(".panel-left-instagram-feed, .panel-right-instagram-feed").removeClass("close");
            $(".panel-left-instagram-feed, .panel-right-instagram-feed").addClass("open");
        }
    });
    // 17.1. toggle instagram feed content additional CLOSER
    $(".toggle-instagram-feed-content").on("click", function() {
        $(".location-modal, .contact-modal, .panel-left-credits, .panel-right-credits").removeClass("open");
        $(".location-modal, .contact-modal, .panel-left-credits, .panel-right-credits").addClass("close");
    });
	
	// 18. drag intro
    function dragIntroduction() {
        $("#drag-intro").fadeIn(1000, function() {
            $(this).addClass("show");
            setTimeout(function() {
                $("#drag-intro").fadeOut(1000, function() {
                    $(this).removeClass("show");
                });
            }, 2000);
        });
    }
	
	// 19. YouTube player 2
	$("#bgndVideo").YTPlayer();


});


// 20. google maps POSITION
function initialize() {
    // EDIT: map latitude and longitude
    var myLatlng = new google.maps.LatLng(34.052235, -118.243683);
    // EDIT: map marker
    var imagePath = "img/location-icon.png";
    var mapOptions = {
        scrollwheel: false,
        zoom: 12,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            featureType: "administrative",
            elementType: "all",
            stylers: [{
                saturation: "-100"
            }]
        }, {
            featureType: "administrative.province",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape",
            elementType: "all",
            stylers: [{
                saturation: -100
            }, {
                lightness: 65
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "poi",
            elementType: "all",
            stylers: [{
                saturation: -100
            }, {
                lightness: "50"
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road",
            elementType: "all",
            stylers: [{
                saturation: "-100"
            }]
        }, {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{
                visibility: "simplified"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "all",
            stylers: [{
                lightness: "30"
            }]
        }, {
            featureType: "road.local",
            elementType: "all",
            stylers: [{
                lightness: "40"
            }]
        }, {
            featureType: "transit",
            elementType: "all",
            stylers: [{
                saturation: -100
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                hue: "#ffff00"
            }, {
                lightness: -25
            }, {
                saturation: -97
            }]
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                lightness: -25
            }, {
                saturation: -100
            }]
        }]
    }
    // EDIT: map address
    var contentString = "<strong>The One</strong><br>ex Inc. Touchdown Dr<br>1176 Los Angeles, CA";
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
    });
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: imagePath,
        // EDIT: map title
        title: "The One"
    });
    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}
google.maps.event.addDomListener(window, "load", initialize);