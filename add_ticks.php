<?php
$servername = "localhost";
$username = "supai_sudheer";
$password = "Paidi@2453";
$dbname = "supai_test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$jsonStr = file_get_contents("php://input"); 
$data = json_decode($jsonStr,true);

$values = '';
for($i=0;$i<count($data);$i++){
    $oi_change = 0;
	$date = $data[$i]['date'];
	$time = $data[$i]['time'];
	$datetime = $data[$i]['datetime'];
	$values .= '(';
	$values .= $data[$i]['instrument_token'].',';
	$values .= "'$datetime'".',';
	$values .= "'$date'".',';
	$values .= "'$time'".',';
	$values .= $data[$i]['open'].',';
	$values .= $data[$i]['high'].',';
	$values .= $data[$i]['low'].',';
	$values .= $data[$i]['close'].',';
	$values .= $data[$i]['ci_op'].',';
	$values .= $data[$i]['quantity'].',';
	$values .= $data[$i]['value'].',';
	if( $data[$i]['price'] != '' ){
	   $values .= $data[$i]['price'].',';
	}else{
	   $values .= '0,';
	}
	if( $data[$i]['oi'] != '' ){
	   $values .= $data[$i]['oi'];
	}else{
	   $values .= '0';
	}
	if($i==count($data) - 1){
		$values .= ')';
	}else{
		$values .= '),';
	}

}

$sql = "INSERT INTO analytics_data (instrument_id, datetime, date, time, open, high, low, close, ci_op, quantity, value, price, oi)
VALUES ".$values;


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully at ". $time;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>