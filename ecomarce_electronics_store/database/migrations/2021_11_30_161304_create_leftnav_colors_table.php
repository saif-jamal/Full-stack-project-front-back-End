<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeftnavColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leftnav_colors', function (Blueprint $table) {
            $table->id();
            $table->string('ColorDashboard')->nullable();
            $table->string('ColorUsers')->nullable();
            $table->string('ColorProducts')->nullable();
            $table->string('ColorShowProducts')->nullable();
            $table->string('ColorCreateProduct')->nullable();
            $table->string('ColorCategories')->nullable();
            $table->string('ColorShowCategories')->nullable();
            $table->string('ColorCreateCategory')->nullable();
            $table->string('ColorSettings')->nullable();
            $table->string('ColorNotifications')->nullable();
            $table->string('ColorLanguage')->nullable();

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
        Schema::dropIfExists('leftnav_colors');
    }
}
