$(document).ready(function(){

    //show header 2
    $('#menu').on('click',function(){
        $(this).toggleClass('fa-times');
       $('header .header-one form  .search-box ').toggleClass('active')
    })
    //home arrowscroll bottom
    $('.home .down').on('click',function(e){
        e.preventDefault();
         $('html,body').animate({ scrollTop: $('.footer').offset().top }, 'slow');

    });

    //header nav ul a go to offset
    $('header .header-two nav ul a').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('html,body').animate({scrollTop:$('#' + $(this).data('scroll')).offset().top -150 },'slow');
    }) 



    //moon mode
    $('.header-two .icons #dark').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('fa-sun fa-moon');
        if($(this).hasClass('fa-sun')){
            $('body').addClass('dark')
        }else{
            $('body').removeClass('dark')

        }
    })

    
//login-form
$('.header-two .icons #user').on('click',function(e){
    e.preventDefault();
   $('.login-form').addClass('active')
})
$('.login-form .fa-times').on('click',function(){
    
   $('.login-form').removeClass('active')
})


    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times')
      $('header .header-two').removeClass('active')
      if($(window).scrollTop() > 68){
        $('header .header-two').addClass(('fixed'))
    }
    else
    $('header .header-two').removeClass(('fixed'));
    //home arrow down
    if($(window).scrollTop() >= 500){
        $('.home .down').fadeOut(800)
    }else{
        $('.home .down').fadeIn(1000)
    }

    //header nav ul a addclass on scroll
    $('section').each(function(){
        if($(window).scrollTop() >= $(this).offset().top -150){
            var id =  $(this).attr('id');
            $('.nav  a').removeClass('active')
            $(`.nav  a[data-scroll=${id}]`).addClass('active')

        }
    })

    //scroll-top show
    if($(window).scrollTop() > 2200){
        $('.scroll-top').fadeIn('slow')
    }
    else{
        $('.scroll-top').fadeOut('slow')

    }
    })
        //scroll-top 
    $('.scroll-top').on('click',function(){
        $('html,body').animate({scrollTop:0},'slow')
    })

    //add-padding
            //scroll-top 
            $('.add-padding').on('click',function(){
                $('.add-padding i').toggleClass('fa-compress-arrows-alt')
               $('section').toggleClass('padding')
            })
        
    //gallery btn
$('.gallery .btn').on('click',function(){
    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.gallery .box').show(400)
    }else{
        $('.gallery .box').not('.' + filter).hide(200);
        $('.gallery .box').filter('.' + filter).show(400)

    }
    $(this).addClass('active').siblings().removeClass('active')
});

})














//home slide owlCarousel
$('.home .box-container').owlCarousel({
    items:1,
    autoplay:true,
    dots:false,
    //autoplayHoverPause:true,
    autoPlaySpeed: 1000,
    loop:true,
    autoplayTimeout:3000,

});
