var reg = /^1[3-9]\d{9}$/;
var reg2 = /^.{6,}$/;
var tip1 = $('.phone-tip');
var tip2 = $('.m-tip');
var phone = $('#phone').val();
var pwd = $('#pw').val();

$('#phone').keyup(function() {
    // console.log($('#phone').val())
    // console.log(phone)
    if (reg.test($('#phone').val())) {
        tip1.html("格式正确");
        tip1.css({
            "color": "green",
            "position": "absolute",
            "top": "97px",
            "left": "280px",
            "font": "14px"
        });


    } else {
        tip1.html("格式不对");
        tip1.css({
            "color": "red",
            "position": "absolute",
            "top": "97px",
            "left": "280px",
            "font": "14px"
        });
    }

})
$('#pw').keyup(function() {
    if (reg2.test($('#pw').val())) {
        tip2.html("格式正确");
        tip2.css("color", "green");
        count++;
    } else {
        tip2.html("格式不对");
        tip2.css("color", "red");
    }

})
$('.dl').on('click', function() {

    $.ajax({
        type: "post",
        url: "../lib/reg.php",
        data: {
            "phone": $('#phone').val(),
            "pwd": $('#pw').val()
        },
        success: function(response) {
            var con = JSON.parse(response);
            alert(con.msg);
            location.href = "login.html";
        }
    });
})
$('.scar').on('click', function() {

    alert("请登录后才能使用此功能")
    location.href = 'login.html';
})
$('.shopcar').on('click', function() {

    alert("请登录后才能使用此功能")
    location.href = 'login.html';
})

$('.mail-l').on('click', function() {
    location.href = 'login.html'
})