<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\ActivityLog;
use Illuminate\Http\Request;

class CertificateController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search');
        $query = Certificate::query();
        if ($search) {
            $query->where('kode', 'like', "%{$search}%")
                  ->orWhere('nama_pemegang', 'like', "%{$search}%");
        }
        $certificates = $query->paginate(10);

        return view('certificates.index', compact('certificates', 'search'));
    }

    public function create()
    {
        return view('certificates.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'kode' => 'required|unique:certificates,kode',
            'nama_pemegang' => 'required',
            'surat_hak' => 'required',
            'no_sertifikat' => 'required',
            'lokasi_tanah' => 'required',
            'luas_m2' => 'required|numeric',
        ]);
        $cert = Certificate::create($data);
        ActivityLog::create(['user_id' => $request->user()->id, 'description' => 'create certificate '.$cert->id]);
        return redirect()->route('certificates.index');
    }

    public function edit(Certificate $certificate)
    {
        return view('certificates.edit', compact('certificate'));
    }

    public function update(Request $request, Certificate $certificate)
    {
        $data = $request->validate([
            'kode' => 'required|unique:certificates,kode,' . $certificate->id,
            'nama_pemegang' => 'required',
            'surat_hak' => 'required',
            'no_sertifikat' => 'required',
            'lokasi_tanah' => 'required',
            'luas_m2' => 'required|numeric',
        ]);
        $certificate->update($data);
        ActivityLog::create(['user_id' => $request->user()->id, 'description' => 'update certificate '.$certificate->id]);
        return redirect()->route('certificates.index');
    }

    public function destroy(Request $request, Certificate $certificate)
    {
        $certificate->delete();
        ActivityLog::create([
            'user_id' => $request->user()->id,
            'description' => 'delete certificate ' . $certificate->id,
        ]);
        return redirect()->route('certificates.index');
    }
}
