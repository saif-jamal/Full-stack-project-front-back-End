<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class producttags extends Model
{
    protected $fillable=[
        'product_id','tagname'
    ];

//    relation with product
   public  function product(){
       return $this->belongsTo(Products::class);
   }



}
