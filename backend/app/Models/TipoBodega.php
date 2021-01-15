<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoBodega extends Model
{
    use HasFactory;


    public function bodega(){
        return $this->belongsTo('App\Bodega', 'id', 'TIPO_BODEGA_id');
    }
    
}