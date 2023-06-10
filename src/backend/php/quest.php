<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//header("HTTP/1.1 200 OK");

$con = mysqli_connect("localhost:3306","root","");
mysqli_select_db($con,"react-login");
$data = json_decode(file_get_contents("php://input"));
$subject=$data->subject;
//echo $data;
//print_r($data);

//echo $email;
//echo $password;

//$sql1 = "SELECT * from signlog where email='".$email."' AND password='".$password."'";
//if($email && $password){
$result= mysqli_query($con,"SELECT  *  from  $subject");

 

$nums = array();

while($row = mysqli_fetch_assoc($result)){
    $nums[]=$row;
}
echo json_encode([$nums]);
?>