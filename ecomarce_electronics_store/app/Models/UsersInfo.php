<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class UsersInfo extends Model
{
   protected $fillable=[
       'phone_number','userimage','status','wallpaper','gender','facebookprofile','instgramprofile','twitterprofile','linkedlnprofile','githubprofile','locationOnMAP','user_id'
   ];

   //relation
    public function user(){
        return $this->belongsTo(User::class);
    }
}
