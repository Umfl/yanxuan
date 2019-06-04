// $(function() {
//     var ione = $(".one"),
//         ithe = $(".the"),
//         itwo = $(".two img"),
//         tthe = $(".the img");

//     var arr = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
//     var oarr = ["img/111.jpg", "img/222.jpg", "img/333.jpg"];
//     itwo.each(function(i) {
//         $(this).click(function() {
//             $(".one img").attr("src", arr[i])
//             tthe.attr("src", oarr[i])
//             itwo.removeClass("active")
//             $(this).addClass("active")
//         })

//         ione.mousemove(function(a) {
//             var evt = a || window.event
//             ithe.css('display', 'block')
//             var ot = evt.clientY - ($(".one").offset().top - $(document).scrollTop()) - 87;
//             var ol = evt.clientX - ($(".one").offset().left - $(document).scrollLeft()) - 87;
//             if (ol <= 0) {
//                 ol = 0;
//             }
//             if (ot <= 0) {
//                 ot = 0;
//             }
//             if (ol >= 175) {
//                 ol = 175
//             }
//             if (ot >= 175) {
//                 ot = 175
//             }
//             $("span").css({ 'left': ol, 'top': ot })
//             var ott = ot / 350 * 800
//             var oll = ol / 350 * 800
//             tthe.css({ 'left': -oll, 'top': -ott })
//         })
//         ione.mouseout(function() {
//             ithe.css('display', 'none')
//         })

//     })
// })
//页面数据渲染
var id = location.search.split('=')[1];
$.ajax({
    type: "get",
    url: "../lib/getproduct.php",
    data: {
        "id": id
    },
    dataType: "json",
    success: function(response) {
        console.log(response);
        var pic = JSON.parse(response.p_pic)
        var t = JSON.parse(response.p_type);
        console.log(t[1].src)
        var content = $('.d-content');
        var temp = '';
        temp = ` <div class="d-content-wrap">
        <div class="d-content-wrap-left wai" >
        <div class="magnifier" id="magnifier1" >
        <div class="magnifier-container">
            <div class="images-cover"></div>
            <!--当前图片显示容器-->
            <div class="move-view"></div>
            <!--跟随鼠标移动的盒子-->
        </div>
        <div class="magnifier-assembly">
            <div class="magnifier-btn">
                <span class="magnifier-btn-left">&lt;</span>
                <span class="magnifier-btn-right">&gt;</span>
            </div>
            <!--按钮组-->
            <div class="magnifier-line">
                <ul class="clearfix animation03">
                    <li>
                        <div class="small-img">
                            <img src="${pic[0].src}" />
                        </div>
                    </li>
                    <li>
                        <div class="small-img">
                            <img src="${pic[1].src}" />
                        </div>
                    </li>
                    <li>
                        <div class="small-img">
                            <img src="${pic[2].src}" />
                        </div>
                    </li>
                    <li>
                        <div class="small-img">
                            <img src="${pic[3].src}" />
                        </div>
                    </li>
                    <li>
                        <div class="small-img">
                            <img src="${pic[4].src}" />
                        </div>
                    </li>
                </ul>
            </div>
            <!--缩略图-->
        </div>
        <div class="magnifier-view"></div>
        <!--经过放大的图片显示容器-->
    </div>
            <div class="yh"><a href="#">企业采购更优惠&nbsp;></a></div>
        </div>
        <div class="d-content-wrap-right">
            <div class="d-r-top">
                <div class="d-top-left">
                    <span class="name">${response.p_name}</span>
                    <span class="jianjie">${response.p_about}</span>
                </div>
                <div class="d-top-right">
                    <span class="good"><span>￥</span><span>${response.p_good}%</span></span>
                    <span class="good-name"><a href="#">好评率&nbsp;></a></span>
                </div>
            </div>
            <div class="d-r-mid">
                <div class="price-box"><span class="d-mid-title">价格</span><span class="fh">￥</span><span class="price">${response.p_price}</span></div>
                <div class="tj">
                    <p class="tj-top">

                        <span class="tj-img"></span><span class="tj-n">超级会员专享价￥15.1,可省<span class="sq">￥0.8</span></span><a href="#">立即开通&nbsp;></a>
                    </p>
                    <p class="tj-bot">
                        季卡仅售59元，开卡即送39元起免费试用商品
                    </p>
                </div>
    <div class="gwf-box"><span class="d-mid-title">购物返</span><span>新用户最高可返</span><span class="gwf">${response.p_gwf}<i></i></span></div>
                <div class="lj"><span class="d-mid-title">领券</span><span class="quan">新人15元直减</span><span class="l-s"></span><span class="lq">领取</span></div>
                <div class="cx"><span class="d-mid-title">促销</span><span class="mje-t">满额减</span><span class="mje">每满99元减30元</span></div>
                <div class="fw"><span class="d-mid-title">服务</span><a href="#">
                        ･&nbsp;支持30天无忧退换货</a><a href="#">
                                ･&nbsp;48小时快速退款</a><a href="#">
                                        ･&nbsp;满88元免邮费</a><a href="#">
                                                ･&nbsp;网易自营品牌</a><br><a class="fw-l" href="#">
                                                        ･&nbsp;国内部分地区无法配送</a> </div>

            </div>
            <div class="d-r-bot">
                <div class="d-bot-color">
                    <span class="d-mid-title color">颜色</span>
                    <img class="type" src="${t[0].src}" alt="藕粉色">
                    <img  class="type" src="${t[1].src}" alt="睿智蓝">
                </div>
                <div class="d-bot-num">
                    <span class="d-mid-title">数量</span>
                    <!-- 要修改 -->
                    <input type="number" value="1" min="1"  id="num">
                </div>
                <div class="d-bot-btn">
                    <a class="ljg-01" href="#">
                        <span class="ljg-02">
                                <span class="ljg-03">立即购买</span>
                        </span>
                    </a>
                    <a class="jrg-01" href="shopcar.html" title="点击加入购物车">
                        <span class="jrg-02">
                        <i class="jrg-img"></i><span class="jrg-03">加入购物车</span>
                        </span>
                    </a>

                    <span class="sc"><i></i><span>收藏</span></span>

                </div>
            </div>
        </div>
    </div>`;
        content.append(temp).find('.jrg-03').on('click', function() {
            addShopCar(response.p_id, response.p_price, $('#num').val());
            // $(".num").val() = $('#num').val();
        });
        $('.type').on('click', function(ev) {
            $(ev.target).addClass('ck').siblings().removeClass('ck');
        });

    }
});

function addShopCar(id, price, num) {
    var shop = cookie.get('shop');
    var product = {
        "id": id,
        "price": price,
        "num": num
    };
    if (shop) {
        shop = JSON.parse(shop);
        if (shop.some(elm => elm.id == id)) {
            shop.forEach(function(elm, i) {
                elm.id == id ? elm.num = num : null;
            });
        } else {
            shop.push(product);
        }
        cookie.set('shop', JSON.stringify(shop), 1);
    } else {
        shop = [];
        shop.push(product);
        cookie.set('shop', JSON.stringify(shop), 1);
    }
}
$('.shopcar').on('click', function() {


    location.href = 'shopcar.html';
})