<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\ProductoController;

Route::post('/NEUgbYOtO8DvjfEmfXHu', [UserController::class, 'authenticate']);

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('/vuzjzJ7mrGkVeA9EZeFU', [UserController::class, 'register']);
    Route::get('/Ck0kehv5POItIh6WbEdL', [UserController::class, 'getUsers']);
    Route::post('/LNABeNawAZSxrt7smflR', [UserController::class, 'getUser']);
    Route::put('/QQRtedhtQkRkChCVVdJh', [UserController::class, 'updateUser']);

    Route::get('/Dx5muDeFg3JicHbFuRMU', [ProductoController::class, 'getProductos']);
    Route::get('/kCRDuPRcMY8FhuGeReSQ', [ProductoController::class, 'basicData']);
    Route::post('/c180tfxoLcWRTeYVRQpY', [ProductoController::class, 'createProduct']);
    Route::post('/QGL2hflAN8PnDl1AX75t', [ProductoController::class, 'getProduct']);
    Route::post('/A6EAKJzdf4cmgrP0o0zN', [ProductoController::class, 'updateProduct']);
    Route::post('/eetcVaoyhbeUUTKlgukm', [ProductoController::class, 'deleteProductImage']);

    Route::get('/ctwSTeTSOHVOf0dfjfoi', [RolesController::class, 'getRoles']);
});