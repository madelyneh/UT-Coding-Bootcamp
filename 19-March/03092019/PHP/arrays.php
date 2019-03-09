<?php

// Arrays in PHP are similar to those in JavaScript.
$names_list = ['Goethe', 'Ibsen', 'Strindberg'];

// You index into them identically ... 
echo "$names_list[0] wrote Dr Faust.\n";

// ... You get the length using a "count" function:
echo "There are " . count($names_list) . " names in your list.\n";

echo str_repeat('=', 12) . "\n";

// ... And you can iterate over them:

foreach ($names_list as $name) {
  echo "$name is a fantastic artist!\n";
}


// PHP's associative arrays are just key-value maps.
//   They're a lot like JavaScript's objects:
$artist_and_country = [
  'Goethe' => 'Germany',
  'Strindberg' => 'Sweden',
  'Ibsen' => 'Norway'
];

// Getting the value for a key is just like getting the value of a JavaScript
//   object's  property using bracket notation:
echo "My favorite author Goethe comes from " . $artist_and_country["Goethe"] . ".\n";

echo str_repeat('=', 12) . "\n";

// Associative arrays also have a foreach, but you get access to the key and
//   value simultaneously. Much nicer than JavaScript object iteration.
foreach ($artist_and_country as $name => $country) {
  echo "$name comes from $country.\n";
}