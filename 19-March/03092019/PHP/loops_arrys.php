<?php 

/* Instructions

In this activity, you'll expand upon the previous exercise using loops and arrays.

To get started, create a fresh PHP file.

Write a line that echoes the first command-line argument passed to your script.

Create an associative array, and store your and your partner's last names as the keys, and your first names and age as the value. Hint: What data structure do you use to store multiple pieces of information in a specific order?

Loop through the array, and print the same information you printed previously for both yourself and your partner:

"My name is {{ FULL NAME }}." Print whether it's long or short.

"I am {{ AGE }} years old." Print the relevant "Sake!" statement, depending on your age.

Separate each iteration with a line of separators, using str_repeat.
*/

// "$argv" is what you use to grab a input from the terminal

var_dump($argv);

$firstName = $argv[1];
$lastName = $argv[2];
$fullName = "$firstName $lastName";
$birthYear = $argv[3];
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


  // Class example

  echo "The first command-line argument is $argv[1].";

$students_array = [
  'Sengstacke' => ['Peleke', 23],
  'Caesar' => ['Julius', 2116]
];

foreach ($students_array as $student => $data) {
  $full_name = $student .' '. $data[0];
  echo "My name is $full_name.\n";

  if (strlen($full_name) > 12)
    echo "It's a long name.\n";
  else
    echo "It's a short name.\n";

  $age = $data[1];

  echo "I'm $age years old.\n";
  if ($age > 21)
    echo "Sake! Sake! Sake!\n";
  else if ($age === 21)
    echo "Just slipped by! Sake! Sake! Sake!\n";
  else
    echo "No sake for me :(\n";

  echo str_repeat('=', 12) . "\n";
}