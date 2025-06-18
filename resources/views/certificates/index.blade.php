@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Sertifikat</h1>
<div class="overflow-x-auto bg-white shadow rounded-lg mb-4">
    <table class="min-w-full divide-y divide-gray-200">
        <thead>
            <tr class="bg-gray-50">
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">No</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Kode</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Nama Pemegang</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Surat Hak</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">No Sertifikat</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Letak Tanah</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Luas (M2)</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Tgl Terbit</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Surat Ukur</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">NIB</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Pendaftaran Pertama</th>
                <th class="px-6 py-3" />
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            @foreach($certificates as $c)
            <tr class="hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $loop->iteration }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->kode }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->nama_pemegang }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->surat_hak }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->no_sertifikat }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->lokasi_tanah }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->luas_m2 }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->tgl_terbit }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->surat_ukur }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->nib }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $c->pendaftaran_pertama }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
{{ $certificates->links() }}
@endsection
