<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('certificates', function (Blueprint $table) {
            $table->id();
            $table->string('kode')->unique();
            $table->string('nama_pemegang');
            $table->string('surat_hak');
            $table->string('no_sertifikat');
            $table->string('lokasi_tanah');
            $table->integer('luas_m2');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('certificates');
    }
};
