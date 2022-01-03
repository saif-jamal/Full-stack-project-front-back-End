<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDarkmodeTable extends Migration
{

    public function up()
    {
        Schema::create('darkmode', function (Blueprint $table) {
            $table->id();
            $table->text('darkmodeColor_check');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('darkmode');
    }
}
