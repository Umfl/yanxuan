<?php
    include('conn.php');
    $id=$_REQUEST['id'];
   
    $sql="select * from product where p_id=$id";
    $res=$mysqli->query($sql);
    echo $mysqli->error;
    $row=$res->fetch_assoc();
    $json=json_encode($row);
    echo $json;
    $mysqli->close();
?>