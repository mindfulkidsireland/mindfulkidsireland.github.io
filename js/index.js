var currentPage = 'home';

function showPage(page) {
    
    $("html, body").animate({ scrollTop: 0 }, "fast");
    
    switch(page) {
        case 'home':
            currentPage = page;
            $('.tab:eq(0)').addClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            
            $('#home').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            $('#contact').css('transform', 'translate3d(100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#faq').css('transform', 'translate3d(200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#pawsb').css('transform', 'translate3d(300vw, 0, 0)').css('opacity', '0').addClass("noselect");
            
            break;
            
        case "contact":
            currentPage = page;
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(1)').addClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            
            $('#home').css('transform', 'translate3d(-100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#contact').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            $('#faq').css('transform', 'translate3d(100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#pawsb').css('transform', 'translate3d(200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            
            break;
            
        case "faq":
            currentPage = page;
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(2)').addClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            
            $('#home').css('transform', 'translate3d(-200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#contact').css('transform', 'translate3d(-100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#faq').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            $('#pawsb').css('transform', 'translate3d(100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            
            break;
            
        case "pawsb":
            currentPage = page;
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            $('.tab:eq(3)').addClass('tab-active');
            
            $('#home').css('transform', 'translate3d(-300vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#contact').css('transform', 'translate3d(-200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#faq').css('transform', 'translate3d(-100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#pawsb').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            
            break;
            
        case "shop":
            $('#dim-window').css('opacity', '0.33').css('pointer-events', 'auto');
            $('#shop-message').css('transform', 'none');
            $('.tab:eq(4)').addClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            
            break;
            
        default:
            break;
    }
}

function hideShopMessage() {
    $('#dim-window').css('opacity', '').css('pointer-events', '');
    $('#shop-message').css('transform', '');
    $('.tab:eq(4)').removeClass('tab-active');
    showPage(currentPage);
}