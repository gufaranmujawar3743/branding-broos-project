(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
    });

    // porfolios list
    $(document).ready(function() {
        // Define an array of image sources
        var imageSources = [
            {
                type:'BL',
                img:'img/project-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-1-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-1-2.jpg'
            },
            {
                type:'BL',
                img:'img/project-2.jpg'
            },
            {
                type:'BL',
                img:'img/project-2-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-3.jpg'
            },
            {
                type:'BL',
                img:'img/project-3-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-3-2.jpg'
            },
            {
                type:'BL',
                img:'img/project-3-3.jpg'
            },
            {
                type:'BL',
                img:'img/project-4.jpg'
            },
            {
                type:'BL',
                img:'img/project-4-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-5.jpg'
            },
            {
                type:'BL',
                img:'img/project-5-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-5-2.jpg'
            },
            {
                type:'BL',
                img:'img/project-6.jpg'
            },
            {
                type:'BL',
                img:'img/project-6-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-7.jpg'
            },
            {
                type:'BL',
                img:'img/project-7-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-7-2.jpg'
            },
            {
                type:'BL',
                img:'img/project-8.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-2.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-3.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-4.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-5.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-6.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-7.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-7-1.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-8.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-9.jpg'
            },
            {
                type:'BL',
                img:'img/project-8-10.jpg'
            },
            {
                type:'BL',
                img:'img/project-9.jpg'
            },
        ];
      
        // Loop through the image sources and create the HTML structure
        $.each(imageSources, function(index, src) {
          var colClass = imageSources.type;
          var portfolioItem = $("<div class='col-xl-4 col-lg-4 col-md-6 portfolio-item " + colClass + "'>");
          var portfolioBox = $("<div class='position-relative portfolio-box'>");
          var image = $("<img class='img-fluid w-100' src='" + src.img + "' alt=''>");
          var portfolioBtn = $("<a class='portfolio-btn' href='" + src.img + "' data-lightbox='portfolio'>");
          var icon = $("<i class='bi bi-plus text-white'></i>");
      
          portfolioBtn.append(icon);
          portfolioBox.append(image, portfolioBtn);
          portfolioItem.append(portfolioBox);
          $(".portfolio-container").append(portfolioItem);
        });
      });
      
    
    
})(jQuery);

