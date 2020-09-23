<?php

/**
 * Controls database connections.
 *
 * @author AJ Ravindiran
 * @version 1.0.0 Jan-02-2010
 */
class database {

    private $host;
    private $username;
    private $password;
    private $database;
    private $connection = null;
    private $connected = false;

    /**
     * Constructs a new database instance, with given details.
     * @param string $host The database server host.
     * @param string $port The database server port.
     * @param string $username The database's username authentication.
     * @param string $password The username's specified password.
     */
    public function __construct($host = "localhost", $username = "root", $password = "") {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
    }

    /**
     * Destructs the database instance.
     */
    public function __destruct() {
        $this->disconnect();
    }

    /**
     * Connections to the given MySQL database. The
     * @param string $database The database to write to and read from.
     */
    public function connect($database) {
        $this->database = $database;
        $this->connection = new mysqli($this->host, $this->username, $this->password) or $this->error($this->connection->error);
        @$this->connection->select_db($this->database) or $this->error($this->connection->error);

        /*
         * If the connection was successful, we can now
         * identify that the connection is sustained.
        */
        if ($this->connection != null) {
            $this->connected = true;
        }
    }

    /**
     * Disconnects this instance from the mysql connection.
     */
    public function disconnect() {
        if ($this->connected) {
            @mysqli_close($this->connection);
            $this->connected = false;
        }
    }

    /**
     * Executes the given querie(s).
     * @param string $query The query to execute.
     * @return resource The data recieved from the database.
     */
    public function execute_query($query) {
        $resultset = $this->connection->query($query) or $this->error('While executing ["' . $query . '"]: ' . $this->connection->error);
        return $resultset;
    }

    /**
     * Evaluates wheter the given result is valid.
     * @param resource $result_set The result set to evaluate.
     * @return int
     */
    public function evaluate_query($query, $default_value = 0) {
        if(!$result = @$this->execute_query($query)) {
            return 0;
        }
        if(@$result->num_rows == 0) {
            return $default_value;
        }
        else {
            return @$result->data_seek( 0); $result->fetch_array()[0];
        }
    }

    /**
     * Calls a mysql error report.
     * @global core $core
     * @param string $text The mysql error.
     */
    public function error($text) {
        global $core;
        $core->system_error("mysql", $text);
    }

    /**
     * Gets the specified connection details from this instance.
     * @param boolean $show_details Whether to show explicit details of the
     * connection's username, password, and username. If true, those details
     * will be shown, otherwise, only the host and port are shown.
     * @return string The connection string.
     */
    public function get_connection_string($show_details = false) {
        if ($show_details) {
            return "database[host=" . $this->host  . ", port=" . $this->port . ", user="
                    . $this->username . ", pass=" . $this->password . ", database=" . $this->database . "]";
        } else {
            return "database[host=" . $this->host . ", port=" . $this->port . "]";
        }
    }
}
?>
