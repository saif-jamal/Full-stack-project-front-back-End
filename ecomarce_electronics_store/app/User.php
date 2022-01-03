<?php

namespace App;

use App\Models\Products;
use App\Models\UsersInfo;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role'
    ];


    protected $hidden = [
        'password', 'remember_token',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //relation
    public function userinfo(){
        return $this->hasOne(UsersInfo::class);
    }

    public function products(){
        return $this->hasMany(Products::class);
    }
}
