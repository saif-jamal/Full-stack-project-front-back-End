<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShoppingbasketsTable extends Migration
{

    public function up()
    {
        Schema::create('shoppingbaskets', function (Blueprint $table) {
            $table->id();


//            relation with products table
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products')->cascadeOnDelete()->cascadeOnUpdate();

            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('shoppingbaskets');
    }
}
