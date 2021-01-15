<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\Bodega;
use App\Http\Request\BodegaRequest;

class BodegaController extends Controller
{
    /**
     * get bodegas
     */
    public function getBodegas(){
        $data = Catalogo::where('estado', 1)->get();
        return Bodega()->json($data, 200);
    }

    /**
     * Add "bodega" row
     */
    public function createBodega(BodegaRequest $request){

        $data = Catalogo::create([
            'nombre' => $request->name,
            'fecha_control' => $request->date,
            'estado' => $request->state,
            'TIPO_BODEGA_id' => $request->type,
        ]);        

        return response()->json($data, 201);

    }

    /**
     * Update bodega row
     */
    public function updateBodega(BodegaRequest $request){

        $bodega = Bodega::find($request->id);

        $bodega->nombre = $request->name;
        $bodega->fecha_control = $request->date;
        $bodega->estado = $request->state;
        $bodega->TIPO_BODEGA_id = $request->type;

        $bodega->save();

        return response()->json($bodega, 200);

    }
}
