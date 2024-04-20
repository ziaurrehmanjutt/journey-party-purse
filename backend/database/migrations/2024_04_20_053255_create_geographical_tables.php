<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class  extends Migration
{
    public function up()
    {
        // Create 'cities' table
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // Add other columns as needed
            $table->timestamps();
        });

        // Create 'states' table
        Schema::create('states', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // Add other columns as needed
            $table->timestamps();
        });

        // Create 'countries' table
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // Add other columns as needed
            $table->timestamps();
        });

        // Create 'subregions' table
        Schema::create('subregions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // Add other columns as needed
            $table->timestamps();
        });

        // Create 'regions' table
        Schema::create('regions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // Add other columns as needed
            $table->timestamps();
        });
    }

    public function down()
    {
        // Drop all tables if needed
        Schema::dropIfExists('cities');
        Schema::dropIfExists('states');
        Schema::dropIfExists('countries');
        Schema::dropIfExists('subregions');
        Schema::dropIfExists('regions');
    }
};
