@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Sertifikat</h1>
<form method="get" class="mb-4">
    <input type="text" name="search" value="{{ $search }}" placeholder="Search" class="border p-1" />
    <button class="bg-blue-500 text-white px-2 py-1">Cari</button>
</form>
<table class="table-auto w-full mb-4">
    <thead>
        <tr>
            <th>Kode</th>
            <th>Nama Pemegang</th>
            <th>No Sertifikat</th>
            <th>Luas (m2)</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        @foreach($certificates as $c)
        <tr>
            <td>{{ $c->kode }}</td>
            <td>{{ $c->nama_pemegang }}</td>
            <td>{{ $c->no_sertifikat }}</td>
            <td>{{ $c->luas_m2 }}</td>
            <td>
                <a href="{{ route('certificates.edit', $c) }}" class="text-blue-500">Edit</a>
                <form action="{{ route('certificates.destroy', $c) }}" method="post" style="display:inline">
                    @csrf
                    @method('delete')
                    <button class="text-red-500" onclick="return confirm('Delete?')">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
{{ $certificates->links() }}
@endsection
