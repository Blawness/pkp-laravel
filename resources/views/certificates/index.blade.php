@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Sertifikat</h1>
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
{{ $certificates->links() }}
@endsection
