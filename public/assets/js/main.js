(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      
      /* ================================
       Mobile Menu Js Start
    ================================ */
    
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

       $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "19920",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

     $documentOn.on("click", ".mean-expand", function () {
        let icon = $(this).find("i");

        if (icon.hasClass("fa-plus")) {
            icon.removeClass("fa-plus").addClass("fa-minus"); 
        } else {
            icon.removeClass("fa-minus").addClass("fa-plus"); 
        }
    });

    /* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

        // Open offcanvas
        $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");

        // Hide sticky item
        $(".sidebar-sticky-item").fadeOut().removeClass("active");
        });

        // Close offcanvas
        $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");

        // Show sticky item
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Body Overlay Js Start
        ================================ */

        $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");

        // Show sticky item when overlay clicked
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Offcanvas Link Click (Optional)
        ================================ */

        $(".offcanvas a").on("click", function () {
        $(".sidebar-sticky-item").fadeIn().addClass("active");
    });

    
      /* ================================
       Sticky Header Js Start
    ================================ */

       $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
       /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }
  
      /* ================================
       CountDown Js Start
    ================================ */

        let targetDate = new Date("2026-12-9 00:00:00").getTime();
        const countdownInterval = setInterval(function () {
            let currentDate = new Date().getTime();
            let remainingTime = targetDate - currentDate;

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                // Display a message or perform any action when the countdown timer reaches zero
                $("#countdown-container").text("Countdown has ended!");
            } else {
                let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                let hours = Math.floor(
                    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                let minutes = Math.floor(
                    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
                );
                let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

                // Pad single-digit values with leading zeros
                $("#day").text(days.toString().padStart(2, "0"));
                $("#hour").text(hours.toString().padStart(2, "0"));
                $("#min").text(minutes.toString().padStart(2, "0"));
                $("#sec").text(seconds.toString().padStart(2, "0"));
            }
        }, 1000);


        /* ================================
        Brand Slider Js Start
    ================================ */

      if($('.brand-slide-2').length > 0) {
        const brandSlide2 = new Swiper(".brand-slide-2", {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            //centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 5,
                },
                767: {
                    slidesPerView: 4,
                },
                575: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 2,
                },
            },
        });
      }

       /* ================================
       Testimonial Js Start
    ================================ */

      if($('.testimonial-slide-2').length > 0) {
        const testimonialSlide2 = new Swiper(".testimonial-slide-2", {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            //centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1.2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

        /* ================================
       Custom Accordion Js Start
    ================================ */

       if ($('.accordion-box').length) {
            $(".accordion-box").on('click', '.acc-btn', function () {
                var outerBox = $(this).closest('.accordion-box');
                var target = $(this).closest('.accordion');
                var accBtn = $(this);
                var accContent = accBtn.next('.acc-content');

                if (target.hasClass('active-block')) {
                    // Already open, so close it
                    accBtn.removeClass('active');
                    target.removeClass('active-block');
                    accContent.slideUp(300);
                } else {
                    // Close all others
                    outerBox.find('.accordion').removeClass('active-block');
                    outerBox.find('.acc-btn').removeClass('active');
                    outerBox.find('.acc-content').slideUp(300);

                    // Open clicked one
                    accBtn.addClass('active');
                    target.addClass('active-block');
                    accContent.slideDown(300);
                }
            });
        }

        function updateCalculations($wrapper, qty) {
            let unitPrice = parseFloat($wrapper.find('.unit-price').text());
            let total = qty * unitPrice;

            $wrapper.find('.sub-total').text(total.toFixed(2));
            $wrapper.find('.summary-qty').text(qty < 10 ? '0' + qty : qty);
            $wrapper.find('.total-cost').text(total.toFixed(2));
        }

        /* ================================
      Event Ticket Js Start
    ================================ */

        // PLUS BUTTON
        $documentOn.on('click', '.plus-btn', function () {
            let $wrapper = $(this).closest('.qty-wrapper');
            let $input = $wrapper.find('.qty-input');

            let qty = parseInt($input.val(), 10) || 1;
            qty++;

            $input.val(qty);
            updateCalculations($wrapper, qty);
        });

        // MINUS BUTTON
        $documentOn.on('click', '.minus-btn', function () {
            let $wrapper = $(this).closest('.qty-wrapper');
            let $input = $wrapper.find('.qty-input');

            let qty = parseInt($input.val(), 10) || 1;

            if (qty > 1) {
                qty--;
                $input.val(qty);
                updateCalculations($wrapper, qty);
            }
        });

         /* ================================
        Mouse Cursor Animation Js Start
        ================================ */

        if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    (window.onmousemove = function(s) {
                        o ||
                            (t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (e.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (n = s.clientY),
                            (i = s.clientX);
                    }),
                    $("body").on(
                            "mouseenter",
                            "button, a, .cursor-pointer",
                            function() {
                                e.classList.add("cursor-hover"),
                                    t.classList.add("cursor-hover");
                            }
                        ),
                        $("body").on(
                            "mouseleave",
                            "button, a, .cursor-pointer",
                            function() {
                                ($(this).is("a", "button") &&
                                    $(this).closest(".cursor-pointer").length) ||
                                (e.classList.remove("cursor-hover"),
                                    t.classList.remove("cursor-hover"));
                            }
                        ),
                        (e.style.visibility = "visible"),
                        (t.style.visibility = "visible");
                }
            }
        }
        itCursor();
      }

      /* ================================
        Back To Top Button Js Start
    ================================ */
    $windowOn.on('scroll', function() {
        var windowScrollTop = $(this).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if (windowScrollTop + windowHeight >= documentHeight - 10) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    });

    $documentOn.on('click', '#back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /* ================================
       Search Popup Toggle Js Start
    ================================ */

    if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function(e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $("body").toggleClass("locked");
        });
    }


      /* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

    /* ================================
       Text Title Animation Js Start
    ================================ */

   if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {

            let splits = [];

            // ===== tz-sub-tilte =====
            $('.tz-sub-tilte').each(function (index, el) {

            let split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });

            splits.push(split);

            gsap.set(split.chars, {
                opacity: 0,
                x: 7
            });

            gsap.to(split.chars, {
                scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 60%",
                scrub: 1
                },
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2
            });
            });

            // ===== tz-itm-title =====
            $('.tz-itm-title').each(function (index, el) {

            let split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });

            splits.push(split);

            gsap.set(split.chars, {
                opacity: 0.3,
                x: -7
            });

            gsap.to(split.chars, {
                scrollTrigger: {
                trigger: el,
                start: "top 92%",
                end: "top 60%",
                scrub: 1
                },
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2
            });
            });

            // 🔥 MOST IMPORTANT PART
            ScrollTrigger.refresh();

            // 🔥 cleanup on breakpoint change
            return () => {
            splits.forEach(split => split.revert());
            ScrollTrigger.getAll().forEach(st => st.kill());
            };

        });
    }




    }); // End Document Ready Function

    
     /* ================================
       Preloader Js Start
    ================================ */

    $('.preloader').delay(700).fadeOut('slow');
  
  })(jQuery); // End jQuery

