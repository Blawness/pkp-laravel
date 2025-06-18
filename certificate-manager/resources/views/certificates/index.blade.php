@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Sertifikat</h1>
<div class="bg-white shadow rounded p-4">
    <form method="get" class="mb-4 flex gap-2">
        <input type="text" name="search" value="{{ $search }}" placeholder="Search" class="border rounded p-2 flex-1" />
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">Cari</button>
    </form>
    <a href="{{ route('certificates.create') }}" class="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded inline-block mb-4">Tambah Sertifikat</a>
    <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
        <tr class="border-b">
            <th>Kode</th>
            <th>Nama Pemegang</th>
            <th>No Sertifikat</th>
            <th>Luas (m2)</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        @foreach($certificates as $c)
        <tr class="border-b">
            <td class="py-2">{{ $c->kode }}</td>
            <td class="py-2">{{ $c->nama_pemegang }}</td>
            <td class="py-2">{{ $c->no_sertifikat }}</td>
            <td class="py-2">{{ $c->luas_m2 }}</td>
            <td class="py-2">
                <a href="{{ route('certificates.edit', $c) }}" class="text-blue-500 hover:underline">Edit</a>
                <form action="{{ route('certificates.destroy', $c) }}" method="post" style="display:inline">
                    @csrf
                    @method('delete')
                    <button class="text-red-500 hover:underline" onclick="return confirm('Delete?')">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
</div>
{{ $certificates->links() }}
@endsection
