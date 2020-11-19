$(document).ready(function(){
 $('.retangulo').on('mouseenter',function(e){
     x=e.pageX - $(this).offset().left,
     y=e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y,left:x}) 
 })
 $('.retangulo').on('mouseout',function(e){
    x=e.pageX - $(this).offset().left,
    y=e.pageY - $(this).offset().top;
   $(this).find('span').css({top:y,left:x}) 
})

});


$(document).ready(function(){
   $('.menu').click(function(){
       $('.mobile-menu').slideToggle();
   })
});

