<?php

$apiKey = '2463f2b8d5769aed2faff7414114087c';
$cityName = $_GET['cityName'];
//$cityName = "Princeton";
$url = "https://api.openweathermap.org/data/2.5/weather?q=".urlencode($cityName)."&appid=".$apiKey;

//$url = "https://api.openweathermap.org/data/2.5/weather?q=abc&appid=2463f2b8d5769aed2faff7414114087c;


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
  http_response_code($httpCode);
  echo json_encode( 'Invalid city name.');
  die();
}
else
{
  $data = json_decode($response, true);
  echo json_encode( 'Invalid city name.');
  echo json_encode(array('exists' => false));

}


if ($data['cod'] === 200) {
  echo json_encode(array('exists' => true));
} else {
  echo json_encode(array('exists' => false));
}

?>