var currentPage = 'home';
var currentQuote = 0;

var videoFrames = [
    "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/DBuUFFVylPw\" frameborder=\"0\" allowfullscreen></iframe>",
    "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nbr608ryTNw\" frameborder=\"0\" allowfullscreen></iframe>",
    "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/5jYuY82ckWo\" frameborder=\"0\" allowfullscreen></iframe>",
    "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/msWXmI0jQUo\" frameborder=\"0\" allowfullscreen></iframe>",
    "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/fG7sJd5FtHI\" frameborder=\"0\" allowfullscreen></iframe>"
];

window.onload = function() {
    showQuote(currentQuote);
    
    $("a").click(function (e) {
        e.preventDefault();
    });
    
    animateBars();
    
    setInterval(function() {
        if(currentPage === "pawsb") {
            if(currentQuote === 2) {
                currentQuote = 0;
            } else {
                currentQuote++;
            }
            showQuote(currentQuote);
        }
    }, 6000);
    
};

function resetBars() {
    $(".bar").each(function (i, obj) {
        $(obj).css("transition", "0s");
        $(obj).css("width", "0%").html("");
        setTimeout(function(){
            $(obj).css("transition", "");
        }, 100);
    });
}

function animateBars() {
    $.getJSON("js/percentages.json", function(data) {
        $(".bar").each(function (i, obj) {
            setTimeout(function() {
                var percent = data[$(obj).attr("data-title")];
                $(obj).css("width", percent).html(percent);
            }, i*100);
        });
    });
}

function showVideo(video) {
    $("#video-active").html(videoFrames[video]);
    $(".video-thumbnail").each(function() {
        $(this).removeClass("active");
    });
    $(".video-thumbnail:eq(" + video + ")").toggleClass("active");
    
    $('#video-active').ready(function(){
        $('#video-active').contents().find('body').html('Hey, i`ve changed content of <body>! Yay!!!');
    });
    
}

function showQuote(quote) {
    $(".quote-dot").each(function() {
        $(this).removeClass("quote-dot-active");
    });
    $(".quote-dot:eq(" + quote + ")").toggleClass("quote-dot-active");
    currentQuote = quote;
    
    $(".quote").each(function(index, obj) {
        if(index === currentQuote) {
            setTimeout(function() {
                $(".quote:eq(" + index + ")").fadeIn(200);
            }, 200);
        } else {
            $(".quote:eq(" + index + ")").fadeOut(200);
        }
    });
}

function showPage(page) {
    
    switch(page) {
        case "home":
            currentPage = page;
            
            $('.tab:eq(0)').addClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            $('.tab:eq(4)').removeClass('tab-active');
            $('.tab:eq(5)').removeClass('tab-active');
            $('.tab:eq(6)').removeClass('tab-active');
            
            $('#home').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            $('#contact').css('transform', 'translate3d(100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#faq').css('transform', 'translate3d(200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#pawsb').css('transform', 'translate3d(300vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#evidence').css('transform', 'translate3d(400vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#clients').css('transform', 'translate3d(500vw, 0, 0)').css('opacity', '0').addClass("noselect");
            
            break;
            
        case "contact":
            currentPage = page;
            
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(1)').addClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            $('.tab:eq(4)').removeClass('tab-active');
            $('.tab:eq(5)').removeClass('tab-active');
            $('.tab:eq(6)').removeClass('tab-active');
            
            $('#home').css('transform', 'translate3d(-100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#contact').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            $('#faq').css('transform', 'translate3d(100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#pawsb').css('transform', 'translate3d(200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#evidence').css('transform', 'translate3d(300vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#clients').css('transform', 'translate3d(400vw, 0, 0)').css('opacity', '0').addClass("noselect");
            
            break;
            
        case "faq":
            currentPage = page;
            
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            $('.tab:eq(2)').addClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            $('.tab:eq(4)').removeClass('tab-active');
            $('.tab:eq(5)').removeClass('tab-active');
            $('.tab:eq(6)').removeClass('tab-active');
            
            $('#home').css('transform', 'translate3d(-200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#contact').css('transform', 'translate3d(-100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#faq').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            $('#pawsb').css('transform', 'translate3d(100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#evidence').css('transform', 'translate3d(200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#clients').css('transform', 'translate3d(300vw, 0, 0)').css('opacity', '0').addClass("noselect");
            
            break;
            
        case "pawsb":
            currentPage = page;
            
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(3)').addClass('tab-active');
            $('.tab:eq(4)').removeClass('tab-active');
            $('.tab:eq(5)').removeClass('tab-active');
            $('.tab:eq(6)').removeClass('tab-active');
            
            $('#home').css('transform', 'translate3d(-300vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#contact').css('transform', 'translate3d(-200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#faq').css('transform', 'translate3d(-100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#pawsb').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            $('#evidence').css('transform', 'translate3d(100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#clients').css('transform', 'translate3d(200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            
            break;
            
        case "evidence":
            
            if(currentPage !== "evidence") {
                resetBars();
                
                setTimeout(function(){
                    animateBars();
                }, 500);
            }
            
            currentPage = page;
            
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            $('.tab:eq(4)').addClass('tab-active');
            $('.tab:eq(5)').removeClass('tab-active');
            $('.tab:eq(6)').removeClass('tab-active');
            
            $('#home').css('transform', 'translate3d(-400vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#contact').css('transform', 'translate3d(-300vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#faq').css('transform', 'translate3d(-200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#pawsb').css('transform', 'translate3d(-100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#evidence').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            $('#clients').css('transform', 'translate3d(100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            
            break;
          
        case "clients":
            
            currentPage = page;
            
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            $('.tab:eq(4)').removeClass('tab-active');
            $('.tab:eq(5)').addClass('tab-active');
            $('.tab:eq(6)').removeClass('tab-active');
            
            $('#home').css('transform', 'translate3d(-500vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#contact').css('transform', 'translate3d(-400vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#faq').css('transform', 'translate3d(-300vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#pawsb').css('transform', 'translate3d(-200vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#evidence').css('transform', 'translate3d(-100vw, 0, 0)').css('opacity', '0').addClass("noselect");
            $('#clients').css('transform', 'translate3d(0, 0, 0)').css('opacity', '1').removeClass("noselect");
            
            break;
        
        case "shop":
            $('#dim-window').css('opacity', '0.33').css('pointer-events', 'auto');
            $('#shop-message').css('transform', 'none');
            
            $('.tab:eq(0)').removeClass('tab-active');
            $('.tab:eq(1)').removeClass('tab-active');
            $('.tab:eq(2)').removeClass('tab-active');
            $('.tab:eq(3)').removeClass('tab-active');
            $('.tab:eq(4)').removeClass('tab-active');
            $('.tab:eq(5)').removeClass('tab-active');
            $('.tab:eq(6)').addClass('tab-active');
            
            break;
            
        default:
            break;
    }
    
        if(currentPage === "home") {
            window.history.replaceState("", "", ".");
        } else {
            window.history.replaceState("", "", "/" + currentPage);
        }
        
}

function hideShopMessage() {
    $('#dim-window').css('opacity', '').css('pointer-events', '');
    $('#shop-message').css('transform', '');
    
    showPage(currentPage);
}