<?php
    include('./conn.php');

    $user_phone = $_REQUEST['phone'];
    $user_pwd=$_REQUEST['pwd'];

    $sql = "select * from users where user_phone='$user_phone' and user_pwd='$user_pwd'";
    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        echo '{"hasphone":true,"msg":"登录成功！"}';
    }else{
        echo '{"hasphone":false,"msg":"登录失败，请检查手机号或密码！"}';
    }
?>