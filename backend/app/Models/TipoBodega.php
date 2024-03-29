<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoBodega extends Model
{

    protected $fillable = [
        'nombre',
        'descripcion',
    ];

    public function bodega(){
        return $this->belongsTo('App\Bodega', 'id', 'TIPO_BODEGA_id');
    }
    
}
