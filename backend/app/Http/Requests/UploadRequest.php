<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'nombre_producto' => 'required',
            'dato_medida' => 'required',
            'precio_unitario' => 'required',
            'cantidad' => 'required',
            'descripcion' => 'required',
            'bodega' => 'required',
            'catalogo' => 'required',
            'categoria' => 'required',
            'descuento' => 'required',
            'unidad_medida' => 'required',
            'files.*' => 'required|mimes:jpeg,bmp,png'
        ];

        return $rules;
    }
}
