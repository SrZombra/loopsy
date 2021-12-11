<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Descuento extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'descuento';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    protected $fillable = [
        'fecha_inicio', 'fecha_limite', 'porcentaje', 'capacidad'
    ];

    protected $attributes = [
        'estado' => 1
    ];

    protected $casts = [
        'fecha_inicio' => 'datetime:Y-m-d H:00:00',
        'fecha_limite' => 'datetime:Y-m-d H:00:00',
    ];

}
