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

Route::post('/login', [UserController::class, 'authenticate']);

Route::get('/home', function () {
    return 'bienvenido!';
});

Route::group(['middleware' => ['jwt.verify']], function() {

    Route::post('/user', [UserController::class, 'register']);
    Route::get('/user', [UserController::class, 'getUsers']);
    Route::post('/user/id', [UserController::class, 'getUser']);
    Route::put('/user', [UserController::class, 'updateUser']);

    Route::get('/product', [ProductoController::class, 'getProductos']);
    Route::get('/product/basic-data/', [ProductoController::class, 'basicData']);
    Route::post('/product', [ProductoController::class, 'createProduct']);
    Route::post('/product/id', [ProductoController::class, 'getProduct']);
    Route::put('/product', [ProductoController::class, 'updateProduct']);
    Route::post('/product/delete/image', [ProductoController::class, 'deleteProductImage']);

    Route::get('/catalogo', [ CatalogoController::class, 'getCatalogos' ]);
    Route::post('/catalogo', [ CatalogoController::class, 'createCatalogo' ]);
    Route::put('/catalogo', [ CatalogoController::class, 'updateCatalogo' ]);
        
    Route::get('/categoria', [ CategoriaController::class, 'getCategorias' ]);
    Route::post('/categoria', [ CategoriaController::class, 'createCategoria' ]);
    Route::put('/categoria', [ CategoriaController::class, 'updateCategoria' ]);
    
    Route::get('/bodega', [ BodegaController::class, 'getBodegas' ]);
    Route::post('/bodega', [ BodegaController::class, 'createBodega' ]);
    Route::put('/bodega', [ BodegaController::class, 'updateBodega' ]);
    Route::get('/tipo-bodega', [ TipoBodegaController::class, 'getTipoBodegas' ]);
    Route::post('/tipo-bodega', [ TipoBodegaController::class, 'createTipoBodega' ]);
    Route::put('/tipo-bodega', [ TipoBodegaController::class, 'updateTipoBodega' ]);
    
    Route::get('/unidad-medida', [ UnidadMedidaController::class, 'getUnidadesMedida' ]);
    Route::post('/unidad-medida', [ UnidadMedidaController::class, 'createUnidadMedida' ]);
    Route::put('/unidad-medida', [ UnidadMedidaController::class, 'updateUnidadMedida' ]);
    
    Route::get('/descuento', [ DescuentoController::class, 'getDescuentos' ]);
    Route::post('/descuento', [ DescuentoController::class, 'createDescuento' ]);
    Route::put('/descuento', [ DescuentoController::class, 'updateDescuento' ]);

    Route::get('/rol', [RolesController::class, 'getRoles']);

});