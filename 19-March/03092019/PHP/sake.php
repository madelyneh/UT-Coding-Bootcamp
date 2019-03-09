<?php
/* Open your solution to the last exercise.

Where you print your name, if it's longer than 12 characters, print: "It's a long name". Otherwise, print: "It's a short name".

Use str_repeat to print a line of separators, like "=". Check the docs: http://php.net/manual/en/function.str-repeat.php

After printing "I am {{ AGE }}", if you're older than 21, print: "Sake! Sake! Sake!". If you're younger than 21, print: "No Sake for me :(". Otherwise, print: "Just slipped by! Sake! Sake! Sake!" 
*/

$firstName = 'Madelyn';
$lastName = 'Helton';
$fullName = "$firstName $lastName";
$birthYear = 1992;
$age = 2019 - $birthYear;

echo "My name is $fullName. \n";

if (strlen($fullName) > 12) 
  echo "It's a long name. \n";
  else {
    echo "It's a short name. \n";

  }

echo str_repeat("===", 10) . "\n";
echo "I am $age years old. \n";
// echo str_repeat("===", 10) . "\n";

if ($age < 21) {
  echo "No Sake for me :( \n";
} else if ($age > 21) {
  echo "Sake! Sake! Sake! \n";
  }

// echo str_repeat("===", 10) . "\n";


