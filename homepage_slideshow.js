

$(document).ready(function(){
    startSlideshow('div.slideshow', 3000);
});


function startSlideshow(container, period)
{
    var i =1;
    var nb = $(container+'  ul li').size();
    $(container+' img').css('position','absolute');
    $(container+' p').css('position','absolute');
    $(container+' ul li').css('list-style','none');
    $(container+' ul li').hide();
    $(container+' li:nth-child('+i+')').fadeIn();

    setInterval(function(){ // on utilise une fonction anonyme
        $(container+' li:nth-child('+i+')').fadeOut(1500);
        if(++i>nb)i=1;
        $(container+' li:nth-child('+i+')').fadeIn(1500);
    },period);
}
