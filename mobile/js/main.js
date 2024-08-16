if($('.banner').length > 0){

    ////// mainbanner //////
    const mainswiper = new Swiper('.banner .swiper-container', {
        direction:'horizontal',
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: '.swiper-pagination',          
            type: 'bullets',
            clickable:true,
        },
    });
    ////// instaslide //////
    const instaswiper = new Swiper('.instagram .swiper-container', {
        direction:'horizontal',
        navigation: {
            nextEl: '.instagram .swiper-button-next',
            prevEl: '.instagram .swiper-button-prev',
        },
    });

    ////// popup //////
    $('.popup .close').click(function(){
        $('.popup').hide();
    });

}/////////////////////////////////////////main//////////////////////////////////////

////// sidemenu //////
var asideMenubtn = $('header > button');
var body = $('body');

asideMenubtn.click(function(){
    body.toggleClass('active');
});

var asideCategory = $('.aside-category > li');
asideCategory.click(function(){
    $(this).find('ul').slideToggle();
    $(this).sibling('li').slideUp();
});

var cartchk = $('header .cartchk');
var cartmodal = $('.cart-modal-container');
var cartmodalclose = $('.modal div:first-child i');

cartchk.click(function(){
    cartmodal.addClass('active');
});
cartmodalclose.click(function(){
    cartmodal.removeClass('active');
});

////// searchform //////
var searchicon = $('header .fa-search');
searchicon.click(function(e){
    e.preventDefault();    
    $('.search-form').css({display:'flex', height:0});
    $('.search-form').stop().animate({height:'30px'});
  });
  
////// sideup/signin //////
$('.input-group input').click(function(){
    $(this).attr('placeholder','');
    $(this).prev().addClass('active');
});

////// category //////
if($('.categorylist').length > 0){
    $('.category').slick({
      arrows:false,
      dots: false,
      slidesToShow: 1,
      variableWidth: true
    });
}

////// detail //////
if($('.detail').length > 0){
    const swiper = new Swiper('.detail .swiper-container', {
        direction:'horizontal',
        pagination: {
            el: '.swiper-pagination',          
            type: 'bullets',
            clickable:true,
        },
    });
}
var tabMenu = $('.tab a');
var tabContent = $('.tabcontents > div');
console.log(tabContent);

tabMenu.click(function(e){
    e.preventDefault();
    var targetIdx = $(this).parent().index();
    tabContent.hide();
    tabContent.eq(targetIdx).show();

    tabMenu.removeClass('active');
    $(this).addClass('active');
});


var rating = $('.rating');
rating.each(function(){
    var score = $(this).attr('data-rate');

    for(i=0; i<score; i++){
        $(this).find('i').eq(i).css({color:'#662E91'});
    }
});

////// cart //////
var cartList = $('.cart .count');
var cartItem;

function cartCount(){
    cartItem = $('.cart_list > li');
    var headerCart = $('.cartheader ul .cartchk');
    var count = cartItem.length;
    cartList.text(count);
    headerCart.attr('data-cart', count);
}
cartCount();

var cartDel = $('.cart_list li > i');

cartDel.click(function(){
    $(this).parent().remove();
    cartCount();
    calcTotalPrice();
});

function calcTotalPrice (){
    cartItem = $('.cart_list > li');
    var itemTotal = 0;
    cartItem.each(function(){
        var itemPrice = $(this).find('.price').attr('data-price') * $(this).find('input').val();
        itemTotal += itemPrice;
    });
    var priceTotal = (itemTotal).toLocaleString('ko-KR',{minimumFractionDigits: 3, maximumFractionDigits: 3});
    $('.price_total').text('￦'+priceTotal);
    var deliveryCost = parseInt($('.delivery_cost').attr('data-delivery-cost'));
    var totalPrice = (deliveryCost + itemTotal).toLocaleString('ko-KR',{minimumFractionDigits: 3, maximumFractionDigits: 3});
    // $('.total_price').text('￦'+ (deliveryCost + itemTotal));
    $('.total_price').text('￦'+totalPrice);
}
calcTotalPrice();

cartItem.find('input').change(function(){
    calcTotalPrice();
});



