<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\CatalogoController;
use App\Http\Controllers\CategoriaController;
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

    Route::post('/VlaDKnSloeQf1OZ5T8VI', [ CatalogoController::class, 'getCatalogos' ]);
    Route::post('/shsabfGoSXsVg88PKRr7', [ CatalogoController::class, 'createCatalogo' ]);
    Route::post('/OmXQy8ACoUZEK6CDFWzI', [ CatalogoController::class, 'updateCatalogo' ]);
        
    Route::get('/X6QE0A9pOy9NvfKqEPK8', [ CategoriaController::class, 'getCategorias' ]);
    Route::post('/g1SuieMPJ8VC5xdhKgRG', [ CategoriaController::class, 'createCategoria' ]);
    Route::post('/8hdNP4KTDz8IID5wbj53', [ CategoriaController::class, 'updateCategoria' ]);

    Route::get('/ctwSTeTSOHVOf0dfjfoi', [RolesController::class, 'getRoles']);
});