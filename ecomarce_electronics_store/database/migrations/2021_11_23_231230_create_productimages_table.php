<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductimagesTable extends Migration
{

    public function up()
    {
        Schema::create('productimages', function (Blueprint $table) {
            $table->id();

//            relation with products table
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products')->cascadeOnDelete()->cascadeOnUpdate();

            $table->text('imageproductname');

            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('productimages');
    }
}
