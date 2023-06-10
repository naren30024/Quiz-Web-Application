<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$data = json_decode(file_get_contents("php://input"));
//echo $data;
$attempts = $data->attempts;
$score = $data->score;
$email=$data->email;


$con = mysqli_connect("localhost:3306","root","");
mysqli_select_db($con,"react-login");

$sql = "UPDATE register set score='$score' , attempts='$attempts' where email='$email'";
$result = mysqli_query($con,$sql);
if($result){
    $response['data']=array(
        'Status' => 'valid');
    echo json_encode($response);
    echo "$email";
}
else{
    $response['data']=array(
    'status' => 'invalid');
    echo json_encode($response);
    echo $email;
}
?>
