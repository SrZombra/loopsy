<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bodega extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'bodega';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    protected $fillable = [
        'nombre',
        'fecha_control',
        'estado',
        'TIPO_BODEGA_id',
    ];

    protected $hidden = [
        'TIPO_BODEGA_id'
    ];

    public function tipo(){
        return $this->hasOne('App\Models\TipoBodega', 'id', 'TIPO_BODEGA_id');
    }
    
}
