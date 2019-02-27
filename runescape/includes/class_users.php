<?php

/**
 * Provides management for uesrs.
 *
 * @author AJ Ravindiran
 * @version 1.0.0 Jan-03-2010
 */
class users {

    /**
     * Attempts to validate the given details. The give username,
     * and hashed password are checked against the connected database,
     *  if there are any matches, the detiails given are valid.
     * @param string $username The username to check for.
     * @param string $password_hash The hashed password specified with the username.
     * @return bool True if details are valid; false if not valid.
     */
    public function validate_details($username = '', $password_hash = '') {
        $q = dbquery("SELECT null FROM users WHERE username = '"
                . filter_for_input($username) . "' AND password = '" . $password_hash . "' LIMIT 1");
        if(mysql_num_rows($q) > 0) {
            return true;
        }
        return false;
    }

    /**
     * Gets the given user id's server rights.
     * @param int $user_id The user's id.
     * @return int The specified user's server rights.
     */
    public function get_server_rights($user_id) {
        if(is_numeric($user_id)) {
            $q = dbquery("SELECT website_rights FROM users WHERE UID = '" . filter_for_input($user_id) . "' LIMIT 1");
            if(mysql_num_rows($q) > 0) {
                $row = mysql_fetch_assoc($q);
                return $row['website_rights'];
            }
        }
        return 0;
    }

    /**
     * Gets the given uesr id's client rights.
     * @param int $user_id The user's id.
     * @return int The specified user's client rights.
     */
    public function get_client_rights($user_id) {
        if(is_numeric($user_id)) {
            $q = dbquery("SELECT server_rights FROM users WHERE UID = '" . filter_for_input($user_id) . "' LIMIT 1");
            if(mysql_num_rows($q) > 0) {
                $row = mysql_fetch_assoc($q);
                return $row['server_rights'];
            }
        }
        return 0;
    }

    /**
     * Gets the specified username's connected master id from the database.
     * @param string $username The username to search for to get id.
     * @return id The id that's connected to the given username.
     */
    public function get_id($username) {
        $q = dbquery("SELECT UID FROM users WHERE username = '" . filter_for_input($username) . "' LIMIT 1");

        if(mysql_num_rows($q) > 0) {
            $row = mysql_fetch_assoc($q);
            return $row['UID'];
        }

        return -1;
    }

    /**
     * Gets the id's connected username from the database.
     * @param int $user_id The user id to search for to get username.
     * @return string The name that's connected to the given id.
     */
    public function get_name($user_id) {
        if(is_numeric($user_id)) {
            $q = dbquery("SELECT username FROM users WHERE UID = '$user_id' LIMIT 1");

            if(mysql_num_rows($q) > 0) {
                $row = mysql_fetch_assoc($q);
                return $row['username'];
            }
        }

        return "";
    }

    /**
     * Gets whether the following id exists.
     * @param int $id The user's master id.
     * @return boolean Whether the id exists in the database.
     */
    public function id_exists($id) {
        if(is_numeric($id)) {
            $q = dbquery("SELECT UID FROM users WHERE UID = '$id' LIMIT 1;");

            if (mysql_num_rows($q) > 0) {
                return true;
            }
        }

        return false;
    }

    /**
     * Gets whether the following name exists.
     * @param string $username The user's name.
     * @return boolean Whether the username exists in the database.
     */
    public function name_exists($username) {
        $q = dbquery("SELECT name FROM users WHERE username = '" . filter_for_input($username) . "' LIMIT 1");
        if (mysql_num_rows($q) > 0) {
            return true;
        }
        return false;
    }

    /**
     * Formats the given name into a visually appealing verson.
     * @param string $username The username to format.
     * @return string The formatted username.
     */
    public function format_name($username) {
        return ucwords(str_replace('_', ' ', $username));
    }

    /**
     * Formats the given name for safe database works.
     * @param string $username The username to format.
     * @return string The formatted username.
     */
    public function format_dbname($username) {
        return str_replace(' ', '_', strtolower($username));
    }
}
?>
