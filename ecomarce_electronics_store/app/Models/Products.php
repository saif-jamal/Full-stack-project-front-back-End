<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
   protected $fillable=[
       'productname_en','productname_ar','descriptions_en','descriptions_ar','productfeature_en','productfeature_ar',
       'producthowused_en','producthowused_ar','status_en','status_ar','price','discountprice','dayfordiscount',
       'user_id','category_id'
   ];

//   relation product with user
    public function user(){
        return $this->belongsTo(User::class);
    }
//    relation product with category
    public function category(){
        return $this->belongsTo(Categories::class);
    }

//    relation product with his images
    public function images(){
            return $this->hasMany(productimages::class);
    }
//    relation product with his tags
    public  function tags(){
        return $this->hasMany(producttags::class);
    }

//    relation with shopping basket
  public function shoppingbasket(){
        return $this->belongsTo(shoppingbasket::class);
  }

  //    relation with wish list
    public function  wishlist(){
        return $this->belongsTo(wishlist::class);
    }


}
