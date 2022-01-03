<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class productimages extends Model
{
    protected $fillable=[
        'product_id','imageproductname'
    ];

//    relation with images table for this product
    public function product(){
        return $this->belongsTo(Products::class);
    }

}
