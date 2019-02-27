<?php

/**
 * Sends information to the given remote server.
 * @param string $data Information about the command and arguments.
 * @return string Information recieved according to the data sent.
 */
function send_data($data) {
    $connection = @fsockopen("127.0.0.1", 43594, $fserrno, $fserrstr, 1);

    if ($connection) {
        fwrite($connection, $data);
        $rd = fread($connection, 256);
        fclose($connection);
        return $rd;
    } else {
        return null;
    }
}
?>
