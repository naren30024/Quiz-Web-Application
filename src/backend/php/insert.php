<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$data = json_decode(file_get_contents("php://input"));
//echo $data;
$firstName = $data->firstName;
$lastName = $data->lastName;
$email = $data->email;
$password = $data->password;
echo $firstName;
echo $lastName;

$con = mysqli_connect("localhost:3306","root","");
mysqli_select_db($con,"react-login");
if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";
mysqli_select_db($con,"react-login");
//$resul= mysqli_query($con,"SELECT * from register where email='$email' AND password='$password'");
$res= mysqli_query($con,"SELECT * from register where email='$email'");
$nums = mysqli_num_rows($res);
//echo $nums

if($nums>=1){
    http_response_code(200);
    echo $email;
} 
else{
    http_response_code(202);
    if($firstName && $lastName && $email && $password){
        $sql = "insert into register(
            firstName,
            lastName,
            email,
            password
            )
            values(
            '$firstName',
            '$lastName',
            '$email',
            '$password'
            )";
            
            $result = mysqli_query($con,$sql);

            if($result){
                $response['data']=array(
                    'Status' => 'valid');
                echo json_encode($response);
            }
            else{
                $response['data']=array(
                'status' => 'invalid');
                echo json_encode($response);
            }
        }
    }
?>