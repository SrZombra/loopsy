<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre_producto', 'dato_medida', 'precio_unitario', 'cantidad', 'descripcion', 'bodega', 'catalogo', 'categoria', 'descuento', 'unidad_medida'
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'producto';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    public function categoria(){
        return $this->hasOne('App\Models\Categoria', 'id_categoria', 'categoria');
    }

    public function catalogo(){
        return $this->hasOne('App\Models\Catalogo', 'id', 'catalogo');
    }

    public function bodega(){
        return $this->hasOne('App\Models\Bodega', 'id', 'bodega');
    }

    public function unidadMedida(){
        return $this->hasOne('App\Models\UnidadMedida', 'id', 'unidad_medida');
    }

    public function descuento(){
        return $this->hasOne('App\Models\Descuento', 'id', 'descuento');
    }

}
