<?php

use App\Http\Controllers\UserController;

Route::post('/login', [UserController::class, 'authenticate']);

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('/register', [UserController::class, 'register']);
});