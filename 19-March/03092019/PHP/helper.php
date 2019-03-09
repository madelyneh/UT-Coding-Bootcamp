<?php 

/* In the last exercise, our foreach statement got a bit cluttered.

Create a file called helpers.php.

Write a function that echoes to the screen, but includes a newline.

Write a function that prints a separator to the screen.

Let it take a parameter specifying how many separators to print.

If the user passes none, set a default value: http://php.net/manual/en/functions.arguments.php

Write a function that tests if a name is long, and returns the appropriate string.

Write a function that determines if you're drinking sake tonight, and returns the appropriate string.

Make these functions available in your solution to the last exercise, and refactor your foreach statement. */


$age = $argv[1];

function println($string) {
  echo $string . "\n";
};

function namelen($age) {
  if($age < 21)
    println("no drinking for you.");
 else if ($age > 21) 
    println("I guess you can drink.");
  
};

namelen($age);

