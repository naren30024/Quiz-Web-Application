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
$question=$data->question;
$option1=$data->option1;
$option2=$data->option2;
$option3=$data->option3;
$option4=$data->option4;
$correct=$data->correct;
if ($question && $option1 && $option2 && $option3 && $option4){
$sql="insert into $subject(
    question,
    option1,
    option2,
    option3,
    option4,
    correct
    )values(
        '$question',
        '$option1',
        '$option2',
        '$option3',
        '$option4',
        '$correct')";
$result = mysqli_query($con,$sql);




if($result){
    
    $response['data']=array(
        'status' => 'valid'
    );
    echo json_encode($response);
}
else{
    $response['data']=array(
        'status' => 'invalid'
    );
    echo json_encode($response);
}
}

?>