@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Edit Sertifikat</h1>
<form action="{{ route('certificates.update', $certificate) }}" method="post" class="space-y-2">
    @csrf
    @method('put')
    <input type="text" name="kode" value="{{ $certificate->kode }}" class="border w-full" />
    <input type="text" name="nama_pemegang" value="{{ $certificate->nama_pemegang }}" class="border w-full" />
    <input type="text" name="surat_hak" value="{{ $certificate->surat_hak }}" class="border w-full" />
    <input type="text" name="no_sertifikat" value="{{ $certificate->no_sertifikat }}" class="border w-full" />
    <input type="text" name="lokasi_tanah" value="{{ $certificate->lokasi_tanah }}" class="border w-full" />
    <input type="number" name="luas_m2" value="{{ $certificate->luas_m2 }}" class="border w-full" />
    <button class="bg-blue-500 text-white px-3 py-1">Simpan</button>
</form>
@endsection
