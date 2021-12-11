<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImagenProducto extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'url_imagen', 'producto'
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'imagenproducto';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

}
