<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    /**
     * Get a limited list of certificates for dashboard preview.
     */
    public static function preview(?string $search = null, int $limit = 5)
    {
        $query = Certificate::query();

        if ($search) {
            $query->where('kode', 'like', "%{$search}%")
                  ->orWhere('nama_pemegang', 'like', "%{$search}%");
        }

        return $query->latest()->take($limit)->get();
    }
    public function index(Request $request)
    {
        $search = $request->query('search');
        $query = Certificate::query();
        if ($search) {
            $query->where('kode', 'like', "%{$search}%")
                  ->orWhere('nama_pemegang', 'like', "%{$search}%");
        }
        $certificates = $query->paginate(10);

        return Inertia::render('CertificatesIndexPage', [
            'certificates' => $certificates,
            'search' => $search,
        ]);
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
            'tgl_terbit' => 'nullable|date',
            'surat_ukur' => 'nullable',
            'nib' => 'nullable',
            'pendaftaran_pertama' => 'nullable|date',
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
            'tgl_terbit' => 'nullable|date',
            'surat_ukur' => 'nullable',
            'nib' => 'nullable',
            'pendaftaran_pertama' => 'nullable|date',
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
            'description' => 'delete certificate '.$certificate->id,
        ]);

        return redirect()->route('certificates.index');
    }
}
