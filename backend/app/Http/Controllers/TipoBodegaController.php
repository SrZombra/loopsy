<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TipoBodegaRequest;
use App\Models\TipoBodega;

class TipoBodegaController extends Controller
{
    /**
     * Obtener tipos de bodegas
     * @param 
     * @return array $data
     */
    public function getTipoBodegas(){

        $data = TipoBodega::all();

        return response()->json($data, 200);

    }

    /**
     * Crear tipo de bodega
     * @param array $request
     * @return array $data
     */
    public function createTipoBodega(TipoBodegaRequest $request){

        $data = TipoBodega::create([
            'nombre' => $request->name,
            'descripcion' => $request->description
        ]);

        return response()->json($data, 200);

    }

    /**
     * Actualizar tipo de bodega
     * @param array $request
     * @return array $data
     */
    public function updateTipoBodega(TipoBodegaRequest $request){

        $data = TipoBodega::find($request->id);

        $data->nombre = $request->name;
        $data->descripcion = $request->description;

        $data->save();

        return response()->json($data, 200);

    }

}
