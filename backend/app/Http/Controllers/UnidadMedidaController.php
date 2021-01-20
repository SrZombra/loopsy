<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UnidadMedidaRequest;
use App\Models\UnidadMedida;

class UnidadMedidaController extends Controller
{
    
    /**
     * Crear unidad de medida
     * @param array $request
     * @return array $data
     */
    public function createUnidadMedida(UnidadMedidaRequest $request){

        $data = UnidadMedida::create([
            'nombre' => $request->name
        ]);

        return response()->json($data, 200);

    }

    /**
     * Obtener unidades de medida
     * @return array $data
     */
    public function getUnidadesMedida(){

        $data = UnidadMedida::all();

        return response()->json($data, 200);

    }

    /**
     * Actualizar unidades de medida
     * @param array $request
     * @return array $data
     */
    public function updateUnidadMedida(UnidadMedidaRequest $request){

        $data = UnidadMedida::find($request->id);

        $data->nombre = $request->name;

        $data->save();

        return response()->json($data, 200);

    }

}
