<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('login2');
});

// Route::get('/login', function () {
//     return view('login2');
// });

Route::get('/dash', function () {
    return view('dashboard');
});

Route::get('/dashboard/home', function () {
    return view('dashboard.home');
});

Route::get('/maps', function () {
    return view('maps');
}); 

Route::get('/spa', function () {
    return view('spa');
}); 

