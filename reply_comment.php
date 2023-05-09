
<?php
// Check if the required POST parameters are set
if (!isset($_POST['timestamp']) || !isset($_POST['reply'])) {
  die("Missing required parameters.");
}

// Get the timestamp and reply from the POST data
$timestamp = $_POST['timestamp'];
$reply = $_POST['reply'];

// Add the reply to the comments JSON file
$comments_file = 'comments.json';
$comments_data = file_get_contents($comments_file);
$comments_array = json_decode($comments_data, true);

foreach ($comments_array as &$comment) {
  if ($comment['timestamp'] == $timestamp) {
    if (!isset($comment['replies'])) {
      $comment['replies'] = array();
    }

    $reply_data = array(
      'name' => 'Anonymous',
      'comment' => $reply,
      'timestamp' => time(),
    );
    array_push($comment['replies'], $reply_data);
    break;
  }
}

// Save the updated comments data back to the file
$comments_data = json_encode($comments_array, JSON_PRETTY_PRINT);
file_put_contents($comments_file, $comments_data);

// Send a success response
http_response_code(200);
?>
