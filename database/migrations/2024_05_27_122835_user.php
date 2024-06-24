<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user', function (Blueprint $table) {
            $table->id('id_user');
            $table->string('nama');
            $table->string('alamat');
            $table->string('noHP');
            $table->string('id_pembayaran')->references('id_pembayaran')->on('pembayaran');
            $table->string('id_spa')->references('id_spa')->on('spa');
            $table->string('id_spesialis')->references('id_spesialis')->on('spesialis');
            $table->string('id_event')->references('id_event')->on('events');
            $table->string('id_yoga')->references('id_yoga')->on('yoga');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
