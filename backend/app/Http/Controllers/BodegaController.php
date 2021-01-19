<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bodega;
use App\Http\Requests\BodegaRequest;

class BodegaController extends Controller
{
    /**
     * get bodegas
     */
    public function getBodegas(){
        $data = Bodega::with('tipo')->where('estado', 1)->get();
        return response()->json($data, 200);
    }

    /**
     * Add "bodega" row
     */
    public function createBodega(BodegaRequest $request){

        $data = Bodega::create([
            'nombre' => $request->name,
            'fecha_control' => $request->date,
            'estado' => 1,
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
