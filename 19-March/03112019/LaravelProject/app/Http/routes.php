<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/other', function () {
    return view('other');
});

Route::get('/misc', function () {
    return view('misc');
});

Route::get('/about', function () {

    $firstName = "Madelyn";
    $lastName = "Helton";
    $email = "hkajsdfh@gmail.com";

    return view("about", compact('firstName', 'lastName', 'email'));
});
