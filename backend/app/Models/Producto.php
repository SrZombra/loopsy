<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

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
        return $this->hasOne('App\Models\Categoria', 'id_categoria', 'CATEGORIA_id_categoria');
    }

    public function catalogo(){
        return $this->hasOne('App\Models\Catalogo', 'id', 'CATALOGO_id');
    }

    public function bodega(){
        return $this->hasOne('App\Models\Bodega', 'id', 'BODEGA_id');
    }

    public function unidadMedida(){
        return $this->hasOne('App\Models\UnidadMedida', 'id', 'unidad_medida_id');
    }

    public function descuento(){
        return $this->hasOne('App\Models\Descuento', 'id', 'DESCUENTO_id');
    }

}
