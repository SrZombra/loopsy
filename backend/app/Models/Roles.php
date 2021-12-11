<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'rol';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    public function user()
    {
        return $this->belongsTo('App\User', 'id');
    }
}
