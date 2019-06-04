<?php
    include('conn.php');
    $user_phone=$_REQUEST['phone'];
    $user_pwd=$_REQUEST['pwd'];
    $sql="select * from users where user_phone='$user_phone'";
    $result=$mysqli->query($sql);
//   echo $user_phone;
//   echo $user_pwd;
//   each $result->num_rows>0;
// echo $result->num_rows;
    if($result->num_rows>0){
        echo '{"hasphone":true,"msg":"手机号已注册请直接去登录！"}';
        //  echo '<script>alert("手机号已注册请直接登录！");</script>';
        //  echo '<script>location.href="login.html";</script>';  
         die;
    }
    $insertSql = "insert into users(user_phone,user_pwd)values('$user_phone','$user_pwd')";
    // echo $insertSql;
    $res=$mysqli->query($insertSql);
   
    // echo "1res1";
    // echo $res;
    if($res){
         echo '{"hasphone":true,"msg":"注册成功请去登录！"}';
        // echo '<script>alert("注册成功");location.href="login.html";</script>';
        // echo '<script>location.href="login.html";</script>';
        // echo "php";
    }
    else{
        // echo "else";
    }
    $mysqli->close(); 
?>