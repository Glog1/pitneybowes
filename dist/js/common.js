//    hover top links
    $('.cat').hover(function () {
    $(this).toggleClass('active'),
    $('.links').toggleClass('inactive');
    },
    function () {
    $(this).toggleClass('active'),
    $('.links').toggleClass('inactive');
    });

//hover cat display parsys
//Shipping
    $('.shipping-cat').hover(function () {
    $('.parsys-shipping').fadeIn(1000).css('display', 'block'),
    $('.').css('display', 'none')
    },
    function () {
    $('.parsys-shipping').css('display', 'none');
    });
    
    //Customer
    $('.customer-cat').hover(function () {
    $('.parsys-customer').fadeIn(1000).css('display', 'block')
    },
    function () {
    $('.parsys-customer').css('display', 'none');
    });
    
    //Location
    $('.location-cat').hover(function () {
    $('.parsys-location').fadeIn(1000).css('display', 'block')
    },
    function () {
    $('.parsys-location').css('display', 'none');
    });
    
    //engagement
    $('.engagement-cat').hover(function () {
     $('.header-wrapper').toggleClass('dark-text'),
    $('.parsys-engagement').fadeIn(1000).css('display', 'block'),
    $('.btn15').toggleClass('dark-text')
    },
    function () {
         $('.header-wrapper').toggleClass('dark-text'),
    $('.parsys-engagement').css('display', 'none'),
    $('.menu').toggleClass('dark-text');
    });
    
    //Global
    $('.global-cat').hover(function () {
    $('.parsys-global').fadeIn(1000).css('display', 'block')
    },
    function () {
    $('.parsys-global').css('display', 'none');
    });

// hover parsys add class "active" for .cat
//Shipping
    $('.parsys-shipping').hover(function () {
    $(this).css('display', 'block'),
    $('.shipping-cat').toggleClass('active');

    },
    function () {
    $(this).css('display', 'none'),
    $('.shipping-cat').toggleClass('active');
    });
    
    //Customer
    $('.parsys-customer').hover(function () {
    $(this).css('display', 'block'),
    $('.customer-cat').toggleClass('active');

    },
    function () {
    $(this).css('display', 'none'),
    $('.customer-cat').toggleClass('active');
    });
    
    //Location
    $('.parsys-location').hover(function () {
    $(this).css('display', 'block'),
    $('.location-cat').toggleClass('active');

    },
    function () {
    $(this).css('display', 'none'),
    $('.location-cat').toggleClass('active');
    });
    
      //Engagement
    $('.parsys-engagement').hover(function () {
    $(this).css('display', 'block'),
    $('.engagement-cat').toggleClass('active'),
     $('.header-wrapper').toggleClass('dark-text'),
     $('.menu').toggleClass('dark-text');

    },
    function () {
    $(this).css('display', 'none'),
    $('.engagement-cat').toggleClass('active'),
     $('.header-wrapper').toggleClass('dark-text')
      $('.menu').toggleClass('dark-text');
    });
    
     //Global
    $('.parsys-global').hover(function () {
    $(this).css('display', 'block'),
    $('.global-cat').toggleClass('active');

    },
    function () {
    $(this).css('display', 'none'),
    $('.global-cat').toggleClass('active');
    });


//open/close menu
 $('.btn15').click(function () {
        if ($(this).hasClass('button-expand')) {
            $(".menu-overlay").css('display','block'),
            $(this).removeClass('button-expand').addClass('active_slider'),
             $(".menu-overlay").removeClass('fadeOut').addClass('fadeIn'),
             $('.tills-wrapper').css('display', 'none'),
             $('.links-wrapper').css('display', 'none'),
             $('.footer-line').css('display', 'none');
        } else {
             $(".menu-overlay").removeClass('fadeIn').addClass('fadeOut'),
            $(".menu-overlay").css('display','none')
            $(this).removeClass('active_slider').addClass('button-expand'),
             $('.tills-wrapper').css('display', 'block'),
             $('.links-wrapper').css('display', 'block'),
             $('.footer-line').css('display', 'block');
           ;
                    
        }
    });
// add class active-till 
 $('.till-hover').hover(function () {
         $('.prod').toggleClass('inactive-till') ;
     });
     
  $('.prod').hover(function () {
        if ($(this).hasClass('inactive-till')) {
           $(this).removeClass('inactive-till').addClass('active-till');
            
        } else {
            $(this).removeClass('active-till').addClass('inactive-till');
           
                    
        }
    });
//add class  scroll
(function() {
    var header = new Headroom(document.querySelector(".top-line"), {
        tolerance: 3,
        offset : 5,
        classes: {
          initial: "animated",
          pinned: "fadeInDown",
          unpinned: "fadeInUp"
        }
    });
    header.init();

    var bttHeadroom = new Headroom(document.getElementById("btt"), {
        tolerance : 1,
        offset : 500,
        classes : {
            initial : "slide",
            pinned : "slide--reset",
            unpinned : "slide--down"
        }
    });
    bttHeadroom.init();
}());


