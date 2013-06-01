<?php

    $registrationDetails = $_POST;

    //echo $registrationDetails;

    //var_dump($registrationDetails)

    $connectDB = mysql_connect('localhost', 'teddy', '123456');


$sqlStatementCols = '';
$sqlStatementValues = '';

foreach($registrationDetails as $key => $value)
{
    $sqlStatementCols = $key.", ".$sqlStatementCols;
    $sqlStatementValues = $value.", ".$sqlStatementValues;
}

$sqlStatement = 'INSERT INTO users('.$sqlStatementCols.') values('.$sqlStatementValues.')';

echo $sqlStatement;
?>