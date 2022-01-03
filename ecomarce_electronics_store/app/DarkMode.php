<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DarkMode extends Model
{
    protected $fillable=[
        'darkmodeColor_check','user_id'
    ];
}
