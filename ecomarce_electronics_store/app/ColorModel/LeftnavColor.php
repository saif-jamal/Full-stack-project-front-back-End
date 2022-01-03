<?php

namespace App\ColorModel;

use Illuminate\Database\Eloquent\Model;

class LeftnavColor extends Model
{
    protected $fillable=['ColorDashboard','ColorUsers','ColorProducts','ColorShowProducts','ColorCreateProduct'
        ,'ColorCategories','ColorShowCategories','ColorCreateCategory','ColorSettings',
        'ColorNotifications','ColorLanguage'];
}
