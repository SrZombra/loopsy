<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Roles;

class RolesController extends Controller
{
    /**
     * Obtener roles
     */

     public function getRoles(){
        $roles = Roles::all();
        return response()->json($roles, 201);
     }
}
