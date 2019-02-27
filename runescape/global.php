<?php


// System definitions.
define('JWEB', true);
define('DEBUG_MODE', false);
define('USER_IP', $_SERVER['REMOTE_ADDR']);

// Site configurations.
define('SITE_NAME', 'RuneScape - MMORPG');
define('SITE_KEYWORDS', 'MMORPG, free RPG games online, online multiplayer, role-playing, massively multiplayer games, mmo, RuneScape, Jagex, java');
define('SITE_DESCRIPTION', 'RuneScape is a massive 3d multiplayer adventure, with monsters to kill, quests to complete, and treasure to win. You control your own character who will improve and become more powerful the more you play.');
define('SITE_MOTTO', 'Join the revolution.');

// Directory workspaces.
define('CWD', str_replace('admincp' . DIRECTORY_SEPARATOR, '', dirname(__FILE__) . DIRECTORY_SEPARATOR));
define('INCLUDES', CWD . 'includes' . DIRECTORY_SEPARATOR);

// #############################################################################
// GLOBAL FUNCTIONS
require_once(INCLUDES . "functions_database.php");
require_once(INCLUDES . "functions_filtering.php");
require_once(INCLUDES . "functions_remote.php");

// #############################################################################
// CONFIGURATION
if(version_compare(PHP_VERSION, '5.3.0', '<')) set_magic_quotes_runtime(0);
error_reporting(E_ALL ^ E_NOTICE);

// #############################################################################
// DEBUGGING
if (DEBUG_MODE) {

    // We don't want customers to see errors / bugs while debugging!
    if (USER_IP != "127.0.0.1" && USER_IP != "::1") {
        trigger_error("This script does not process external requests while in debug mode. Aborting.", E_USER_ERROR);
	exit;
    }

    error_reporting(E_ALL);
}

// #############################################################################
// SESSION
session_start();

// #############################################################################
// INITIALIZATION
require_once(INCLUDES . "class_core.php");
require_once(INCLUDES . "class_database.php");
require_once(INCLUDES . "class_users.php");

$core = new core();
$users = new users();
$core->parse_configs();

$database = new database(
        $core->get_config("database.host"),
        $core->get_config("database.user"),
        $core->get_config("database.pass"));
$database->connect($core->get_config("database.name"));

define('WWW', $core->get_config("site.address"));

// #############################################################################
// SESSION(S)
if (isset($_SESSION['JWEB_USER']) && isset($_SESSION['JWEB_HASH'])) {
    if ($users->validate_details($_SESSION['JWEB_USER'], $_SESSION['JWEB_HASH'])) {
        define("LOGGED_IN", true);
        define("USER_NAME", $_SESSION['JWEB_USER']);
        define("USER_HASH", $_SESSION['JWEB_HASH']);
        define("USER_ID", $users->get_id(USER_NAME));
        define("USER_RIGHTS", $users->get_server_rights(USER_ID));
    } else {
        session_destroy();
    }
} else {
    define("LOGGED_IN", false);
    define("USER_NAME", "Guest");
    define("USER_HASH", "");
    define("USER_ID", -1);
    define("USER_RIGHTS", 0);
}
?>
