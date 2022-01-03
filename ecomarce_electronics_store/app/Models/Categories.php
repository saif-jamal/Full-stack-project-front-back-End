<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $fillable=[
      'categoryname_en','categoryname_ar','categorydescriptions_en','categorydescriptions_ar','categoryimage','status_en','status_ar',
        'categorysection_en','categorysection_ar','categoryparientID'
    ];

    public function products(){
        return $this->hasMany(Products::class);
    }
}
