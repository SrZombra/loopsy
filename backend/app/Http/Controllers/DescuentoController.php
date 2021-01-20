<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\DescuentoRequest;
use App\Models\Descuento;

class DescuentoController extends Controller
{
    /**
     * Obtener descuentos
     * @return array $data
     */
    public function getDescuentos(){
        
        $data = Descuento::all()->where('estado', 1);

        return response()->json($data, 200);

    }

    /**
     * Crear descuento
     * @param array $request
     * @return array $data
     */
    public function createDescuento(DescuentoRequest $request){

        $data = Descuento::create([
            'fecha_inicio' => $request->date_ini,
            'fecha_limite' => $request->date_end,
            'porcentaje' => $request->percentaje,
            'capacidad' => $request->capacity,
        ]);

        return response()->json($data, 200);

    }

    /**
     * Actualizar descuento
     * @param array $request
     * @return array $data
     */
    public function updateDescuento(DescuentoRequest $request){

        $data = Descuento::find($request->id);

        $data->fecha_inicio = $request->date_ini;
        $data->fecha_limite = $request->date_end;
        $data->porcentaje = $request->percentaje;
        $data->capacidad = $request->capacity;
        $data->estado = $request->state;

        $data->save();

        return response()->json($data, 200);

    }

}
