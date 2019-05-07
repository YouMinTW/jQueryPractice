$(document).ready(function(){
    // set options
    var speed = 500;
    var autoSwitch = true;
    var autoSwitch_speed = 4000;

    $(".slide").first().addClass("active");

    // hide all slide
    $(".slide").hide();

    // show first
    $(".active").show();

    // next slide
    $("#next").on("click", nextSlide);

    // prev slide
    $("#prev").on("click", prevSlide);


    // auto slide    
    if(autoSwitch == true){
        setInterval(nextSlide, autoSwitch_speed);
    }


    function nextSlide(){
        $(".active").removeClass("active").addClass("oldActive");
            if($(".oldActive").is(":last-child")){
                $(".slide").first().addClass("active");
            }
            else{
                $(".oldActive").next().addClass("active");
            }
            $(".oldActive").removeClass("oldActive");
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);
    }
    function prevSlide(){
        $(".active").removeClass("active").addClass("oldActive");
            if($(".oldActive").is(":first-child")){
                $(".slide").last().addClass("active");
            }
            else{
                $(".oldActive").prev().addClass("active");
            }
            $(".oldActive").removeClass("oldActive");
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);
    
    }
});


