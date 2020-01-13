$('.thumbnails img').click(function(){

    var thumbnailImg = $('.thumbnail').attr('src');
    var largeImg = $('#largeImage').attr('src');
   
     $('#largeImage').attr('src',$(this).attr('src').replace(thumbnailImg,largeImg));
     $('#largeImage').attr('alt',$(this).attr('alt').replace(thumbnailImg,largeImg));
    
});