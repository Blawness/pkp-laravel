@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Tambah Sertifikat</h1>
<div class="bg-white shadow rounded p-4">
<form action="{{ route('certificates.store') }}" method="post" class="space-y-2">
    @csrf
    <input type="text" name="kode" placeholder="Kode" class="border rounded p-2 w-full" />
    <input type="text" name="nama_pemegang" placeholder="Nama Pemegang" class="border rounded p-2 w-full" />
    <input type="text" name="surat_hak" placeholder="Surat Hak" class="border rounded p-2 w-full" />
    <input type="text" name="no_sertifikat" placeholder="No Sertifikat" class="border rounded p-2 w-full" />
    <input type="text" name="lokasi_tanah" placeholder="Lokasi" class="border rounded p-2 w-full" />
    <input type="number" name="luas_m2" placeholder="Luas m2" class="border rounded p-2 w-full" />
    <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">Simpan</button>
</form>
</div>
@endsection
