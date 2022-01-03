<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Changewishlistname extends Migration
{

    public function up()

    {

        Schema::rename('_wish_list', 'wishlists');

    }


    public function down()

    {

    }
}
