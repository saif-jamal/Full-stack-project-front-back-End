<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{

    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('categoryname_en');
            $table->string('categoryname_ar');
            $table->text('categorydescriptions_en');
            $table->text('categorydescriptions_ar');
            $table->text('categoryimage');
            $table->enum('status_en',['Available','Unavailable'])->default('Available');
            $table->enum('status_ar',['متوفر','غير متوفر'])->default('متوفر');
            $table->enum('categorysection_en',['mainsection','subsection'])->default('mainsection');
            $table->enum('categorysection_ar',['قسم رأيسي','قسم فرعي'])->default('قسم رأيسي');
            $table->integer('categoryparientID')->default(0);


            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
