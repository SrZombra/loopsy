<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CategoriaRequest;
use App\Models\Categoria;

class CategoriaController extends Controller
{

    /**
     * Get categorias
     */
    public function getCategorias(){
        $categorias = Categoria::where('estado', 1)->get();
        return response()->json($categorias, 200);
    }

    /**
     * Create categoria row
     */
    public function createCategoria(CategoriaRequest $request){

        $categoria = Categoria::create([
            'nombre' => $request->name,
            'estado' => 1
        ]);

        return response()->json($categoria, 201);

    }

    /**
     * Update categoria row
     */
    public function updateCategoria(CategoriaRequest $request){

        $categoria = Categoria::find($request->id);

        $categoria->nombre = $request->name;
        $categoria->estado = $request->state;

        $categoria->save();

        return response()->json($categoria, 200);

    }
}
