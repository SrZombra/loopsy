<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UnidadMedida extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'unidad_medida';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    protected $fillable = [
        'nombre'
    ];

}
