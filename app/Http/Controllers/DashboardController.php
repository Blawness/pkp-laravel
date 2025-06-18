<?php

namespace App\Http\Controllers;

use App\Http\Controllers\CertificateController;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $search = $request->query('search');
        $certificates = CertificateController::preview($search);

        return Inertia::render('dashboard', [
            'certificates' => $certificates,
            'search' => $search,
        ]);
    }
}
