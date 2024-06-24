<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\spaCtrl;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/homepage', function () {
    return Inertia::render('Homepage');
});

Route::get('/spa', function () {
    return Inertia::render('spa');
});

// Route::get('/spa', [spaCtrl::class, 'spaTotal'])->name('spa');

Route::get('/yoga', function () { 
    return Inertia::render('yoga');
});

Route::get('/spesialis', function () {
    return Inertia::render('Spesialis2');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        // 'canSpa' => Route::has('spa'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/spa', function () {
//     return Inertia::render('Spa');
// })->name('spa');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/spa', function () {
//     return Inertia::render('Spa');
// })->middleware(['auth', 'verified'])->name('spa');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
