<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\Bodega;
use App\Models\Categoria;
use App\Models\Catalogo;
use App\Models\UnidadMedida;
use App\Models\Descuento;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Obtener todos los productos activos
     */
    public function getProductos(){

        $productos = Producto::with('categoria', 'catalogo', 'bodega', 'unidadMedida', 'descuento')->get();
        return response()->json($productos, 200);
        
    }

    /**
     * Obtener los datos básicos para registro
     */
    public function basicData(){
        $data = (object) [];

        $data->bodegas = Bodega::all();
        $data->categorias = Categoria::all();
        $data->catalogos = Catalogo::all();
        $data->unidades_medida = UnidadMedida::all();
        $data->descuentos = Descuento::all();

        return response()->json($data, 200);
    }

    /**
     * Crear el producto
     */
    public function createProduct(Request $request){

        $path = [];

        // foreach ($request->files as $key => $value) {
        //     $path[$key] = Storage::disk('local')->put(
        //         'documents/'.$value['name'], $value
        //     );
        // }

        return response()->json($request->files[0]['name'], 200);


    }

}
