// 获取物品数据

$.ajax({
    type: "get",
    url: "../lib/getlist.php",
    dataType: "json",
    success: function(response) {
        // console.log(response);
        var temp = '';
        var cont = $(".one");
        var cont2 = $(".two");
        response.forEach(function(elm, i) {
            var pic = JSON.parse(elm.p_pic);
            // console.log(pic[0].src)
            var last = "";
            if (i == 3 || i == 7) {
                last = "last";
            }
            var id = elm.p_id;
            // console.log();
            temp = `<dd class="four-list ` + last + `">
                <a href="details.html?id=${id}">
                    <img class="sh lazy"  data-original="${pic[0].src}" alt="">
                    <img class="hid lazy" style="display: none" data-original="../img/03.jpg" alt="">
                    <!-- <img class="lazy bzi" data-original="../img/bzi.png"> -->
                    <div class="kuai"></div>
                    <span class="dd-name">${elm.p_name}</span>
                    <span class="
                        dd-price"><span>￥</span>${elm.p_price}</span>
                </a>
            </dd>`;
            if (i < 4) {
                cont.append(temp);
            } else {
                cont2.append(temp);
            }
            $("img.lazy").lazyload({

                effect: "fadeIn",
                threshold: 2000
            });
        })
    }
});
//lunbo
$(function() {
    var nowpic = 0;
    var zindex = 0;
    var numimg = $('.banner-top img').length - 1;
    var timer = null;

    function now() {

        $($('.banner-top .side')[nowpic]).css('z-index', 50).fadeIn(500).siblings('.side').css('z-index', 0).fadeOut();
        $($('.btn')[nowpic]).addClass('active').siblings('.btn').removeClass('active');
    }
    $('.leftbtn').click(function() {

        nowpic--;
        if (nowpic < 0) {
            nowpic = numimg;
        }
        now()

    });
    $('.rightbtn').click(function() {
        nowpic++;
        if (nowpic > numimg) {
            nowpic = 0;
        }
        now();
    })
    $('.btn').click(function() {
        var idex = $('.btn').index(this)
        nowpic = idex;
        $(this).addClass('active').siblings().removeClass('active');
        now()
    })

    function auto() {
        timer = setInterval(function() {
            nowpic++;
            if (nowpic > numimg) {
                nowpic = 0;
            }
            now();
        }, 3000)
    };
    $('.banner-top').mouseover(function() {
        clearInterval(timer)
    });
    $('.banner-top').mouseout(function() {
        auto();
    });
    auto();
})
$(document).ready(function() {
    $('.nav-x').css({

        'height': '0px',
        'top': '-1000px',
        "opacity": '0',
        "transition": "all 1s"

    })
});

$(window).scroll(function() {

    var top = $(window).scrollTop()

    if (top >= 200) {
        $('.nav-x').css({
            'height': '50px',
            'display': 'fixed',
            'top': '0px',
            "opacity": '1',


        })

    } else if (top <= 200) {
        $('.nav-x').css({
            'height': '0px',
            'top': '-1000px'
        })

    }
})