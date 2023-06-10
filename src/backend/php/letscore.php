<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$data = json_decode(file_get_contents("php://input"));
//echo $data;
$email=$data->email;


$con = mysqli_connect("localhost:3306","root","");
mysqli_select_db($con,"react-login");

$sql = "SELECT score,attempts from register where email='$email'";
$result = mysqli_query($con,$sql);
$res=mysqli_fetch_assoc($result);
echo json_encode($res);