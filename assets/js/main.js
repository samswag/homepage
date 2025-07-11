/* -----------------------------------------------
					Js Main
--------------------------------------------------
    Template Name: Mariam - Personal Portfolio Template
--------------------------------------------------

Table of Content

	. Preloader
	. Menu
    . magnificPopup
    . Share Media
    . Testimonials
	. All Functions

 
----------------------------------- */
(function ($) {
    "use strict";


    /* -----------------------------------
                Menu
    ----------------------------------- */
    function menu() {
        "use strict";
        $("#menuToggle").on("click", function () {
            $(".header-left").toggleClass("open");
            $(".main").toggleClass("open");
        });
        $(".cross").on("click", function () {
            $(".header-left").removeClass("open"); 
        });
        $(".nav-link").on("click", function () {
            $(".header-left").removeClass("open");
        });
    }


    /* -----------------------------------
	       magnificPopup
    -----------------------------------*/
    function magnificPopup() {
        "use strict";
        $(".works-items .view-work").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }



    /* -----------------------------------
          Share Media
   -----------------------------------*/
    function shareMedia() {
        $('.btn-share').on("click", function () {
            $('.social-footer').toggleClass('active');
        });
    }

    
    /* -----------------------------------
	      All functions
    -----------------------------------*/
    // Window on Load
    $(window).on("load", function () {
        "use strict";
        loading();

    });

    // Document on Ready
    $(document).on("ready", function () {
        "use strict";
        shareMedia();
        menu();
        magnificPopup();
    });

})(jQuery);