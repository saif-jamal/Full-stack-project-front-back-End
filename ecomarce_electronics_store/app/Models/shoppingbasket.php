<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class shoppingbasket extends Model
{
    protected $fillable=[
        'product_id','product_quantity','MainTotalPrice_allProduct','TotalPrice_for_oneProduct','user_id'
    ];

//    relation with product
   public function products(){
       return $this->hasMany(Products::class);
   }




}

