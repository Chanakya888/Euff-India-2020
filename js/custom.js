
// video popup when click on film's trailer 
var video_btn = $(".js-video-button");

if(video_btn.length){
    $(".js-video-button").modalVideo();
}

var readMore = document.querySelector(".read-more-text");
// read more toggle btn
if(readMore){
    $('.read-more-text').readmore({
        speed: 1000,
        maxHeight: 500,
        collapsedHeight: 0,
        });
}


/*$( document ).ready(function() {
    var banner = document.querySelector(".page-banner");
    
    if(banner) {
        var banner = document.querySelector(".page-banner");
        var container = document.querySelector(".overlay-main-container");

        $(banner).load(function() {
            var imageHeight = banner.clientHeight;
            $(container).css("top", imageHeight + 75);
        });

        $( window ).resize(function() 
        {
            var banner = document.querySelector(".page-banner");
            var container = document.querySelector(".overlay-main-container");
            var imageHeight = banner.clientHeight;
            $(container).css("top", imageHeight + 75);
        });
    }

   
});*/