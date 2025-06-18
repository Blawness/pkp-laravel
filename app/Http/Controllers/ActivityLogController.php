<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use Inertia\Inertia;

class ActivityLogController extends Controller
{
    public function index()
    {
        $logs = ActivityLog::latest()->paginate(20);

        return Inertia::render('LogsIndexPage', [
            'logs' => $logs,
        ]);
    }
}
