<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use App\Models\Certificate;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $stats = [
            'certificates' => Certificate::count(),
            'users' => User::count(),
            'logs' => ActivityLog::count(),
        ];

        return Inertia::render('dashboard', [
            'stats' => $stats,
        ]);
    }
}
