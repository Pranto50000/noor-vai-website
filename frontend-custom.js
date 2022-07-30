(function($) {
    "use strict";
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350);
        $(window).scrollTop(0);
    });
    if ($(window).width() > 767) {
        var allCourseArea = $(".show-all-course-area-wrap");
        var filter = $("#filter");
        var coursesGgrids = $(".courses-grids");
        var coursesSidebar = $(".coursesLeftSidebar");
        var grid = coursesGgrids.find(".col-xl-4");
        filter.on("click", function() {
            coursesSidebar.toggleClass("bang");
            allCourseArea.toggleClass("col-md-12 col-lg-12 col-sm-12 col-xl-12");
            if ((grid.hasClass("col-xl-4")) || grid.hasClass("col-lg-6")) {
                grid.removeClass("col-xl-4").addClass("col-xl-3");
                grid.removeClass("col-lg-6").addClass("col-lg-4");
            } else {
                grid.addClass("col-xl-4").removeClass("col-xl-3");
                grid.addClass("col-lg-6").removeClass("col-lg-3");
            }
        })
    }
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('.dropdown-menu').forEach(function(element) {
            element.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        })
        if (window.innerWidth < 992) {
            document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown) {
                everydropdown.addEventListener('hidden.bs.dropdown', function() {
                    this.querySelectorAll('.submenu').forEach(function(everysubmenu) {
                        everysubmenu.style.display = 'none';
                    });
                })
            });
            document.querySelectorAll('.dropdown-menu a').forEach(function(element) {
                element.addEventListener('click', function(e) {
                    let nextEl = this.nextElementSibling;
                    if (nextEl && nextEl.classList.contains('submenu')) {
                        e.preventDefault();
                        console.log(nextEl);
                        if (nextEl.style.display == 'block') {
                            nextEl.style.display = 'none';
                        } else {
                            nextEl.style.display = 'block';
                        }
                    }
                });
            })
        }
    });
    if ($(window).width() <= 991) {
        var flag = $(".menu-language-btn");
        var notification = $(".menu-notification-btn");
        var userBtn = $(".menu-user-btn");
        flag.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
        notification.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
        userBtn.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
    }
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    $('#myTab a').on('shown.bs.tab', function() {
        destroy_owl($('.owl-carousel'));
        initialize_owl($('.owl-carousel'));
    })

    function initialize_owl(el) {
        $('.direction-ltr .course-slider-items').owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: false,
            smartSpeed: 1000,
            margin: 30,
            rtl: false,
            nav: true,
            navText: ["<span class=\"iconify\" data-icon=\"la:angle-left\"></span>", "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>", ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 4,
                }
            },
        });
        $('.direction-rtl .course-slider-items').owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: false,
            smartSpeed: 1000,
            margin: 30,
            rtl: true,
            nav: true,
            navText: ["<span class=\"iconify\" data-icon=\"la:angle-left\"></span>", "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>", ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 4,
                }
            },
        });
    }
    initialize_owl();

    function destroy_owl(el) {
        el.trigger("destroy.owl.carousel");
        el.find('.owl-stage-outer').children(':eq(0)').unwrap();
    }
    $('.direction-ltr .blog-slider-items-wrap').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        rtl: false,
        nav: true,
        navText: ["<span class=\"iconify\" data-icon=\"la:angle-left\"></span>", "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>", ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        },
    });
    $('.direction-rtl .blog-slider-items-wrap').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        rtl: true,
        nav: true,
        navText: ["<span class=\"iconify\" data-icon=\"la:angle-left\"></span>", "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>", ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        },
    });
    feather.replace();
    new VenoBox({
        selector: ".venobox"
    });
    $('.barra-nivel').each(function() {
        var valorLargura = $(this).data('nivel');
        var valorNivel = $(this).html("<span class='valor-nivel'>" + valorLargura + "</span>");
        $(this).animate({
            width: valorLargura
        });
    });
    var boxBgSetting = $(".box-bg-image");
    boxBgSetting.each(function(index) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    $(".menu-has-children").on("click", function() {
        $(this).toggleClass("has-open");
    });
    $(".toggle").on("click", function() {
        if ($(".password").attr("type") == "password") {
            $(".password").attr("type", "text");
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
        } else {
            $(".password").attr("type", "password");
            $(this).addClass("fa-eye");
            $(this).removeClass("fa-eye-slash");
        }
    });
    $('.add-question-form-btn').on('click', function() {
        $('.add-more-question-form-block').removeClass('d-none')
    })
    $('.start-conversation-btn-wrap > button').on('click', function() {
        $('.discussion-righ-wrap').toggleClass('show-editor');
        return false;
    });
    var current_fs, next_fs, previous_fs;
    var opacity;
    var current = 1;
    var steps = $(".upload-course-step-item").length;
    setProgressBar(current);
    $(".next").on("click", function() {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        $("#progressbar li").eq($(".upload-course-step-item").index(next_fs)).addClass("active");
        next_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(++current);
    });
    $(".previous").on("click", function() {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        $("#progressbar li").eq($(".upload-course-step-item").index(current_fs)).removeClass("active");
        previous_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
    }
    $(".submit").on("click", function() {
        return false;
    })
    $(document).on('ready', function() {
        $('[data-toggle="popover"]').popover();
    });
    $(document).on("click", ".deleteItem", function() {
        let form_id = this.dataset.formid;
        Swal.fire({
            title: 'Sure! You want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete It!'
        }).then((result) => {
            if (result.value) {
                $("#" + form_id).submit();
            } else if (result.dismiss === "cancel") {
                Swal.fire("Cancelled", "Your imaginary file is safe :)", "error")
            }
        })
    });
    $(document).on("click", "a.delete", function() {
        const selector = $(this);
        Swal.fire({
            title: 'Sure! You want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete It!'
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'GET',
                    url: $(this).data("url"),
                    success: function(data) {
                        location.reload();
                    }
                })
            }
        })
    });
})(jQuery);