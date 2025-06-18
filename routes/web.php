<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ActivityLogController;

// Redirect visitors to the login page and provide a named home route for Ziggy
Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/certificates', [CertificateController::class, 'index'])->name('certificates.index');
    Route::resource('certificates', CertificateController::class)->except('index');
    Route::get('/users', [UserController::class, 'index'])->name('users.index')->middleware('role:admin');
    Route::resource('users', UserController::class)->except('index')->middleware('role:admin');
    Route::get('/logs', [ActivityLogController::class, 'index'])->name('logs.index')->middleware('role:admin');

    Route::middleware('verified')->group(function () {
        Route::get('dashboard', \App\Http\Controllers\DashboardController::class)->name('dashboard');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
