<?php

namespace App\Http\Controllers;

use App\Models\Catalogo;
use App\Http\Requests\CatalogoRequest;

class CatalogoController extends Controller
{

    /**
     * get catalogos
     */
    public function getCatalogos(){
        $data = Catalogo::where('estado', 1)->get();
        return response()->json($data, 200);
    }

    /**
     * Add "catalogo" row
     */
    public function createCatalogo(CatalogoRequest $request){

        $catalogo = Catalogo::create([
            'nombre_catalogo' => $request->name,
            'descripcion' => $request->description,
            'estado' => $request->state
        ]);        

        return response()->json($catalogo, 201);

    }

    /**
     * Update catalogo row
     */
    public function updateCatalogo(CatalogoRequest $request){

        $catalogo = Catalogo::find($request->id);

        $catalogo->nombre_catalogo = $request->name;
        $catalogo->descripcion = $request->description;
        $catalogo->estado = $request->state;

        $catalogo->save();

        return response()->json($catalogo, 200);

    }

}
