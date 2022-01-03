<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_infos', function (Blueprint $table) {
            $table->id();
            $table->string('phone_number')->nullable();
            $table->text('userimage')->nullable();
            $table->enum('status',['active','blocked'])->default('active');
            $table->text('wallpaper')->nullable();
            $table->enum('gender',['male','female'])->nullable();
            $table->string('facebookprofile')->nullable();
            $table->string('instgramprofile')->nullable();
            $table->string('twitterprofile')->nullable();
            $table->string('linkedlnprofile')->nullable();
            $table->string('githubprofile')->nullable();
            $table->text('locationOnMAP')->nullable();

            //relation linke userinfo with user
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_infos');
    }
}
