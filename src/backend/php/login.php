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
//echo $data;
//print_r($data);
$email = $data->email;
$password = $data->password;
//echo $email;
//echo $password;

//$sql1 = "SELECT * from signlog where email='".$email."' AND password='".$password."'";
//if($email && $password){
$result= mysqli_query($con,"SELECT * from register where email='$email' AND password='$password'");

 

$nums = mysqli_num_rows($result);
$rs=array();
$rs = mysqli_fetch_assoc($result);


if($nums>=1){
    //echo "correct";
    http_response_code(200);
    session_start();
    $outp= "";
    //while(){
    //    if(){
           //dhfcadif 
           //$outp .= '{"email":"'  .$rs["email"] . '",';
           //$outp .= '"firstName":"'  .$rs["firstName"] . '",';
           //$outp .= '"lastName":"'  .$rs["lastName"] . '",';
           //$outp .= '"status":"200"}';
           //$response['data']=array(
           // 'status' => '200');
     //   }
        
        
   // }
   echo (json_encode($rs));
   //session_start();
   //$_SESSION["username"]=$rs["email"]
   //$rse=mysqli_fetch_array(mysqli_query($con,"SELECT * from os"))
   //echo (json_encode([$rse]));
}
else{
    echo "wrong";
    http_response_code(202);
}
//}
?>