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
        Schema::table('certificates', function (Blueprint $table) {
            $table->date('tgl_terbit')->nullable();
            $table->string('surat_ukur')->nullable();
            $table->string('nib')->nullable();
            $table->date('pendaftaran_pertama')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('certificates', function (Blueprint $table) {
            $table->dropColumn(['tgl_terbit', 'surat_ukur', 'nib', 'pendaftaran_pertama']);
        });
    }
};
