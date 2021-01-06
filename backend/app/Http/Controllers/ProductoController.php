<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\ImagenProducto;
use App\Models\Bodega;
use App\Models\Categoria;
use App\Models\Catalogo;
use App\Models\UnidadMedida;
use App\Models\Descuento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\UploadRequest;

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
    public function createProduct(UploadRequest $request){
        
        $names = [];

        $producto = Producto::create([
            'nombre_producto' => $request->nombre_producto,
            'dato_medida' => $request->dato_medida,
            'precio_unitario' => $request->precio_unitario,
            'cantidad' => $request->cantidad,
            'descripcion' => $request->descripcion,
            'bodega' => $request->bodega,
            'catalogo' => $request->catalogo,
            'categoria' => $request->categoria,
            'descuento' => $request->descuento,
            'unidad_medida' => $request->unidad_medida,
        ]);

        $this->uploadImages($request->photos, $producto);

        return response()->json($producto, 201);

    }

    /**
     * Upload Images
     */
    private function uploadImages($images, $producto){

        if(!$images){
            return false;
        }

        foreach($images as $key =>  $image){
            $names[$key] = $image->store('public/imageProducts');
        }

        for ($i=0; $i < count($names); $i++) { 
            ImagenProducto::create([
                'url_imagen' => $names[$i],
                'producto' => $producto->id
            ]);
        }
    }

    /**
     * Get product by id
     */
    public function getProduct(Request $request){
        $data = Producto::with('categoria', 'catalogo', 'bodega', 'unidadMedida', 'descuento')->find($request->id);
        $data->images = ImagenProducto::where('producto', $data->id)->get();
        return $data;
    }

    /** 
     * Update product
     */
    public function updateProduct(UploadRequest $request){

        $product = Producto::find($request->id);

        $product->categoria = $request->categoria;
        $product->catalogo = $request->catalogo;
        $product->bodega = $request->bodega;
        $product->dato_medida = $request->dato_medida;
        $product->unidad_medida = $request->unidad_medida;
        $product->nombre_producto = $request->nombre_producto;
        $product->precio_unitario = $request->precio_unitario;
        $product->cantidad = $request->cantidad;
        $product->descripcion = $request->descripcion;
        $product->descuento = $request->descuento;

        $this->uploadImages($request->photos, $product);

        $product->save();

        return response()->json($product, 200);
    }

    /** 
     * Delete product image
     */

    public function deleteProductImage(Request $request){

        $image = ImagenProducto::find($request->id);

        Storage::delete($image->url_imagen);

        $image->delete();

        return response()->json([], 200);
    }

}
