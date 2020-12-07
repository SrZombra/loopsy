<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\RolesController;

Route::post('/NEUgbYOtO8DvjfEmfXHu', [UserController::class, 'authenticate']);

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('/vuzjzJ7mrGkVeA9EZeFU', [UserController::class, 'register']);
    Route::get('/Ck0kehv5POItIh6WbEdL', [UserController::class, 'getUsers']);
    Route::post('/LNABeNawAZSxrt7smflR', [UserController::class, 'getUser']);
    Route::put('/QQRtedhtQkRkChCVVdJh', [UserController::class, 'updateUser']);

    Route::get('/ctwSTeTSOHVOf0dfjfoi', [RolesController::class, 'getRoles']);
});