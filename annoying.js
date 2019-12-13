var mouse = {'x': 0, 'y': 0};

homex = 0;
homey = 0;
forcex = 0;
forcey = 0;
magnet = 5000;


$(document).bind('mousemove', function(e) {
    mouse = {'x': e.pageX, 'y': e.pageY};
});

$('.box').each(function(index, el){
$(el).data( "homex", parseInt($(el).position().left));
$(el).data( "homey", parseInt($(el).position().top));
});

$('.box').css('position','absolute');
setInterval(function () {
    $('.box').each(function(index, el){
        el = $(el);
        position = el.position();
        x0 = el.offset().left;
        y0 = el.offset().top;
        x1 = mouse.x;
        y1 = mouse.y;
        distancex = x1-x0;
        distancey = y1-y0;

        distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
        
        
        if(distance>200) {
           magnet=0; 
        } else {
            magnet=5000;
        }
    
        
        powerx = x0 - (distancex / distance) * magnet / distance;
        powery = y0 - (distancey / distance) * magnet / distance;
        
        forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
        forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
                    

        el.css('left', powerx + forcex);
        el.css('top',  powery + forcey);
        
    });
}, 15);

$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(0);
     }, 0);
    $(".cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(10000);
    }); 
}); 

$(document).mouseleave(function(){
    r1 = window.confirm("Hey, wait... \n \nAre you leaving??")
    if (r1 == true) {
        r2 = window.confirm("Ok I guess that means you're a real hum-bug.")
        if (r2 == true) {
            r3 = window.confirm("So you really want to leave?");
            if (r3 == true){
                r4 = window.confirm("Just take this quick survey before you go. Thanks!");
                if (r4 == true){
                    //open survey
                    window.open("survey.html")
                } else{
                    //open survey
                    setTimeout(function () {
                        $(".survey").fadeIn(0);
                     }, 0);
                     window.alert("oops...")
                }
            } else{
                alert("I didn't thing you really wanted to leave.");
            }
        } else {
            alert("Ok, cool. Enjoy the site a little more.")
        }
    }
    
})

$("#stopButton").click(function(){
    alert("TODO: add stop button functionality.");
})

$("#buttZone").click(function(){
    window.open("grinch.html", "_blank", "height=375,width=400,left="+(mouse.x-100)+",top="+mouse.y)
    document.getElementById("grinchAlert").play();
})

