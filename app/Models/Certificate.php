<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Certificate extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode',
        'nama_pemegang',
        'surat_hak',
        'no_sertifikat',
        'lokasi_tanah',
        'luas_m2',
        'tgl_terbit',
        'surat_ukur',
        'nib',
        'pendaftaran_pertama',
    ];
}
