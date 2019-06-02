// 获取物品数据

$.ajax({
    type: "get",
    url: "../lib/getlist.php",
    dataType: "json",
    success: function(response) {
        console.log(response);
        var temp = '';
        var cont = $(".one");
        var cont2 = $(".two");
        response.forEach(function(elm, i) {



            var pic = JSON.parse(elm.p_pic);
            console.log(pic[0].src)
            var last = "";
            if (i == 3 || i == 7) {
                last = "last";
            }
            temp = `<dd class="four-list ` + last + `">
                <a href="#">
                    <img class="sh" src="${pic[0].src}" alt="">
                    <img class="hid" style="display: none" src="../img/03.jpg" alt="">
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



            // var last2 = $('.content-wrap-four>dd:eq(3)');
            // var last3 = $('.content-wrap-four>dd:eq(3)');
            // console.log(last);

        })
    }
});