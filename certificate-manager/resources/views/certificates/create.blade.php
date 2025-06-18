@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Tambah Sertifikat</h1>
<form action="{{ route('certificates.store') }}" method="post" class="space-y-2">
    @csrf
    <input type="text" name="kode" placeholder="Kode" class="border w-full" />
    <input type="text" name="nama_pemegang" placeholder="Nama Pemegang" class="border w-full" />
    <input type="text" name="surat_hak" placeholder="Surat Hak" class="border w-full" />
    <input type="text" name="no_sertifikat" placeholder="No Sertifikat" class="border w-full" />
    <input type="text" name="lokasi_tanah" placeholder="Lokasi" class="border w-full" />
    <input type="number" name="luas_m2" placeholder="Luas m2" class="border w-full" />
    <button class="bg-blue-500 text-white px-3 py-1">Simpan</button>
</form>
@endsection
