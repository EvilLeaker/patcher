<?php


if ($argc != 4)
{
echo "please put in game_id version serial\n";
echo "example php downloadorder.php SDBT 1.00 A63E01B1628\n";
exit();
}


error_reporting(1);

$game_id = $argv[1];
$ver = $argv[2];
$serial = $argv[3];

echo $game_id . "\n";
echo $ver . "\n";
echo $serial . "\n";

    $compressed = base64_encode(gzdeflate("game_id=".$game_id."&ver=".$ver."&serial=".$serial, -1, ZLIB_ENCODING_DEFLATE));

    //print($compressed);

    // use key 'http' even if you send the request to https://...

    $options = array(

        'http' => array(

            'header'  => array("Pragma: DFI", "User-Agent: ALL.Net"),

            'method'  => 'POST',

            'content' => $compressed

        )

    );

    $context  = stream_context_create($options);

    $result = file_get_contents('http://naominet.jp/sys/servlet/DownloadOrder', false, $context);

    if ($result === FALSE) { exit("error dl\n"); /* Handle error */ }

    //print($result);

    $response = gzuncompress(base64_decode($result));

    print($response);

    print("\n");

?>
