<?php

/**
 * Executes the given query.
 * @global database $database The database giving us connect to the database.
 * @param string $query The query to execute.
 * @return returns false if not executed, resource is value returned.
 */
function dbquery($query) {
    global $database;
    return $database->execute_query($query);
}

/**
 * Evaluates the given query.
 * @global database $database The database giving us connect to the database.
 * @param string $query The query to execute.
 * @param int $default_value
 * @return returns false if not executed, resource is value returned.
 */
function dbevaluate($query, $default_value = 0) {
    global $database;
    return $database->evaluate_query($query, $default_value);
}

?>
