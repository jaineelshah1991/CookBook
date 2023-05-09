<?php

$apiKey = '0cadac1ea307eb4d8dc08dc1085da483';
$cityName = $_GET['cityName'];

$url = "https://api.openweathermap.org/data/2.5/weather?q=".urlencode($cityName)."&appid=".$apiKey;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
  http_response_code($httpCode);
  die();
}

$data = json_decode($response, true);

if ($data['cod'] === 200) {
  echo json_encode(array('exists' => true));
} else {
  echo json_encode(array('exists' => false));
}

?>
