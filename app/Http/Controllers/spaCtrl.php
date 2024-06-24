<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\spa;

class spaCtrl extends Controller
{
    public function spa() {
        $spaTotal = spa::all();
        return view('spa', ['spaTotal' => $spaTotal]);
        
    }
}
