var shop = cookie.get('shop');
if (shop) {
    shop = JSON.parse(shop);

    var idList = shop.map(elm => elm.id).join();
    //console.log(idList)
    $.ajax({
        type: "get",
        url: "../lib/getcar.php",
        data: {
            "idList": idList
        },
        dataType: "json",
        success: function(response) {

            var temp = ``;
            var cont = $('.s-l-mid');
            // console.log(response)
            var sumall = 0;
            response.forEach(function(elm, i) {
                console.log(elm.p_id)
                var arr = shop.filter((val, i) => {

                    return val.id === elm.p_id;

                })
                var img = JSON.parse(elm.p_pic);

                var price = elm.p_price;
                //console.log(typeof price)
                price = Number(price).toFixed(2);
                //console.log(arr)
                //console.log(arr[0].num)
                var i = 0;
                temp = ` <div class="s-l-mid-wrap c${i} ">
            <span class="all">
            <input  class="check " type="checkbox">
        </span>
            <span class="title">
            <img src="${img[2].src}" alt="商品图片">
            <span class="name">${elm.p_name}</span>
            </span>
            <span class="price"><span class="qian-log">￥</span><span class="qian">${price}</span></span>
            <span class="num"><span class="les"><i class="jian"></i></span>
            <input clss="set-num-inp" type="text" value="1">
            <span class="up"><i class="jia"></i><i class="jia-01"></i></span></span>
            <span class="sum"><span class="qian-log">￥</span><span class="qian">${price*arr[0].num}</span></span>
            <span class="cz "  data-id="${elm.p_id}" >删除</span>
        </div>`;



                sumall += price * arr[0].num;

                //     ($(ev.target).parent()).remove();
                $('.pay >.qian')[0].innerHTML = sumall;
                //     console.log(shop[i].id)
                //     cookie.set('shop',)
                cont.append(temp);
                // })
                // i++;
                // console.log("a")
            })
            $('.check').on('click', function(ev) {
                    $(ev.target).toggleClass('checka');

                })
                // var check = $('.check')[0]

            console.log($('.check')[0]);
            if ($('.check-all').hasClass("checka")) {
                for (var i = 0; i <= $('.check').length; i++) {
                    $($('.check')[i]).addClass('checka');
                }
            }


            $('.cz').on('click', function(ev) {
                var id = $(ev.target).attr("data-id")
                var cok = cookie.get('shop');
                console.log(cok);

                cok = JSON.parse(cok);
                console.log(cok);
                cok.forEach(function(elm, i) {
                    if (elm.id === id) {
                        cok[i] = "";
                        cok.splice(i, 1);
                    }
                })
                cok = JSON.stringify(cok);
                cookie.set('shop', cok);
                location.reload()

            })


        }


    });

}
// $(window).scroll(function() {

//     var top = $(window).scrollTop();

//     if (top >= 200) {
//         $('.s-l-bot').css({
//             "display": 'fixed',
//             "top": "300px"

//         })
//     }

// })