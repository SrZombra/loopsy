<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\CatalogoController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\BodegaController;
use App\Http\Controllers\TipoBodegaController;
use App\Http\Controllers\UnidadMedidaController;
use App\Http\Controllers\DescuentoController;

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

    Route::get('/VlaDKnSloeQf1OZ5T8VI', [ CatalogoController::class, 'getCatalogos' ]);
    Route::post('/shsabfGoSXsVg88PKRr7', [ CatalogoController::class, 'createCatalogo' ]);
    Route::post('/OmXQy8ACoUZEK6CDFWzI', [ CatalogoController::class, 'updateCatalogo' ]);
        
    Route::get('/X6QE0A9pOy9NvfKqEPK8', [ CategoriaController::class, 'getCategorias' ]);
    Route::post('/g1SuieMPJ8VC5xdhKgRG', [ CategoriaController::class, 'createCategoria' ]);
    Route::post('/8hdNP4KTDz8IID5wbj53', [ CategoriaController::class, 'updateCategoria' ]);
    
    Route::get('/DVv7FIl5dM69C318bPgd', [ BodegaController::class, 'getBodegas' ]);
    Route::post('/OpWBvwAe2XlXzGHBxUYm', [ BodegaController::class, 'createBodega' ]);
    Route::post('/8KIwFdp91iYspwO5qRwF', [ BodegaController::class, 'updateBodega' ]);
    Route::get('/sBJDf2vvKyyoSvHgukZt', [ TipoBodegaController::class, 'getTipoBodegas' ]);
    Route::post('/y6dv62ZJzJEqRi0RbscK', [ TipoBodegaController::class, 'createTipoBodega' ]);
    Route::post('/MnQtPGxNnC6Lx6zBmAPQ', [ TipoBodegaController::class, 'updateTipoBodega' ]);
    
    Route::get('/wNmoc7rP0KRj6fd2B2kN', [ UnidadMedidaController::class, 'getUnidadesMedida' ]);
    Route::post('/VxfoZt9idpn2XgwL38uW', [ UnidadMedidaController::class, 'createUnidadMedida' ]);
    Route::post('/W92uYWaHaKim6uVU99A5', [ UnidadMedidaController::class, 'updateUnidadMedida' ]);
    
    Route::get('/ZXGpQ10kEGKY1ALr2rYL', [ DescuentoController::class, 'getDescuentos' ]);
    Route::post('/8M5GZjFdU3LYS15c0yC4', [ DescuentoController::class, 'createDescuento' ]);
    Route::post('/We3219m96llcObfAPaZW', [ DescuentoController::class, 'updateDescuento' ]);

    Route::get('/ctwSTeTSOHVOf0dfjfoi', [RolesController::class, 'getRoles']);
});