$(function(){

    $('a.hamburger').on('click', function(){
        $(this).toggleClass("isActive");
        $("#siteNav").toggleClass("isActive");
        return false;
    });

    $('a.js-dropdownTrigger').on('click', function(){
        $(this).toggleClass("isActive");
        $(this).parent().toggleClass("isActive");
        $(this).next().toggleClass("isActive");
        return false;
    });

    $("#t1, #r1, #t2, #r2, #t3, #r3, #t4, #r4, #t5, #r5, #t6, #r6, #t7, #r7").hide();

    $("a.especial").on('click', function(){
        $("#t1, #r1").slideToggle('slow');

        if ($("#t1, #r1").is(':visible')) {
     $("html, body").animate({scrollTop: $("#t1, #r1").offset().top});
    }

     $("#t2, #r2, #t3, #r3, #t4, #r4, #t5, #r5, #t6, #r6, #t7, #r7").hide();
        return false;
    });

    $(".square").on('click', function(){
        $("#t1, #r1").slideToggle('slow');
        return false;
    });


    $("a.surtida").on('click', function(){
        $("#t2, #r2").slideToggle('slow');

        if ($("#t2, #r2").is(':visible')) {
     $("html, body").animate({scrollTop: $("#t2, #r2").offset().top});
    }

    $("#t1, #r1, #t3, #r3, #t4, #r4, #t5, #r5, #t6, #r6, #t7, #r7").hide();
        return false;
    });

    $(".square2").on('click', function(){
        $("#t2, #r2").slideToggle('slow');
        return false;
    });


    $("a.hawaiana").on('click', function(){
        $("#t3, #r3").slideToggle('slow');

        if ($("#t3, #r3").is(':visible')) {
     $("html, body").animate({scrollTop: $("#t3, #r3").offset().top});
    }

    $("#t2, #r2, #t1, #r1, #t4, #r4, #t5, #r5, #t6, #r6, #t7, #r7").hide();
        return false;
    });

    $(".square3").on('click', function(){
        $("#t3, #r3").slideToggle('slow');
        return false;
    });



    $("a.bandido").on('click', function(){
        $("#t4, #r4").slideToggle('slow');

        if ($("#t4, #r4").is(':visible')) {
     $("html, body").animate({scrollTop: $("#t4, #r4").offset().top});
    }

    $("#t1, #r1, #t2, #r2, #t3, #r3, #t5, #r5, #t6, #r6, #t7, #r7").hide();
        return false;
    });

    $(".square4").on('click', function(){
        $("#t4, #r4").slideToggle('slow');
        return false;
    });


    $("a.carnes").on('click', function(){
        $("#t5, #r5").slideToggle('slow');

        if ($("#t5, #r5").is(':visible')) {
     $("html, body").animate({scrollTop: $("#t5, #r5").offset().top});
    }

    $("#t1, #r1, #t2, #r2, #t3, #r3, #t4, #r4, #t6, #r6, #t7, #r7").hide();
        return false;
    });

    $(".square5").on('click', function(){
        $("#t5, #r5").slideToggle('slow');
        return false;
    });


    $("a.ranchera").on('click', function(){
        $("#t6, #r6").slideToggle('slow');

        if ($("#t6, #r6").is(':visible')) {
     $("html, body").animate({scrollTop: $("#t6, #r6").offset().top});
    }

    $("#t1, #r1, #t2, #r2, #t3, #r3, #t4, #r4, #t5, #r5, #t7, #r7").hide();
        return false;
    });

    $(".square6").on('click', function(){
        $("#t6, #r6").slideToggle('slow');
        return false;
    });


    $("a.nortena").on('click', function(){
        $("#t7, #r7").slideToggle('slow');

        if ($("#t7, #r7").is(':visible')) {
     $("html, body").animate({scrollTop: $("#t7, #r7").offset().top});
    }

    $("#t1, #r1, #t2, #r2, #t3, #r3, #t4, #r4, #t5, #r5, #t6, #r6").hide();
        return false;
    });

    $(".square7").on('click', function(){
        $("#t7, #r7").slideToggle('slow');
        return false;
    });





    $("#u1, #u2, #u3, #u4").hide();

    $("h1.s1").on('click', function(){
        $("#u1").slideToggle('slow');

        if ($("#u1").is(':visible')) {
     $("html, body").animate({scrollTop: $("#u1").offset().top});
    }

    $("#u2, #u3, #u4").hide();
        return false;
    });

    $(".square8").on('click', function(){
        $("#t7, #r7").slideToggle('slow');
        return false;
    });


    $("h1.s2").on('click', function(){
        $("#u2").slideToggle('slow');

        if ($("#u2").is(':visible')) {
     $("html, body").animate({scrollTop: $("#u2").offset().top});
    }

    $("#u1, #u3, #u4").hide();
        return false;
    });

    $(".square8").on('click', function(){
        $("#t7, #r7").slideToggle('slow');
        return false;
    });



    $("h1.s3").on('click', function(){
        $("#u3").slideToggle('slow');

        if ($("#u3").is(':visible')) {
     $("html, body").animate({scrollTop: $("#u3").offset().top});
    }

    $("#u1, #u2, #u4").hide();
        return false;
    });

    $(".square8").on('click', function(){
        $("#t7, #r7").slideToggle('slow');
        return false;
    });


    $("h1.s4").on('click', function(){
        $("#u4").slideToggle('slow');

        if ($("#u4").is(':visible')) {
     $("html, body").animate({scrollTop: $("#u4").offset().top});
    }

    $("#u1, #u2, #u3").hide();
        return false;
    });

    $(".square8").on('click', function(){
        $("#t7, #r7").slideToggle('slow');
        return false;
    });



    $(".rslides").responsiveSlides({
        nav:true,
        pager:false,
        namespace: "centered-btns"
    });





    new WOW().init();

    $(".pizza").hover(function(){
        $(this).addClass("bounceIn");
    }, function(){
        $(this).removeClass("bounceIn");
    });
  
});

    $(document).scroll(function(e){
    parallax();

    var scrollTop = $(document).scrollTop();
    if (scrollTop > 106) {
        $("#mobilemenu").addClass("fixed");
        $("#menu ul").addClass("fixed");

    }else{
        $("#mobilemenu").removeClass("fixed");
        $("#menu ul").removeClass("fixed");
    }
});


    function parallax() {
    var ev = {
        scrollTop: document.body.scrollTop || document.documentElement.scrollTop
    };
    ev.ratioScrolled = ev.scrollTop / (document.body.scrollHeight - document.documentElement.clientHeight);
    render(ev);
}

function render(ev) {
    var t = ev.scrollTop;
    var y = Math.round(t * 1/8) - 1;
    $('#equipo').css('background-position', '0 ' + y + 'px');
}

