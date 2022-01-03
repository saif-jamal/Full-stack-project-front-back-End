<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class wishlist extends Model
{
    protected $fillable=[
        'product_id','user_id','product_name_en','product_name_ar','product_descri_en','product_descri_ar','product_img','product_price','product_discountprice'
    ];

//    relation with product
   public function  products(){
       return $this->hasMany(Products::class);
   }

}
