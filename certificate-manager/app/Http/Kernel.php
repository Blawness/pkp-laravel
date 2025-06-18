<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;
use App\Http\Middleware\RoleMiddleware;

class Kernel extends HttpKernel
{
    protected $middlewareGroups = [
        'web' => [
            // ... Laravel's default web middleware
        ],
    ];

    protected $routeMiddleware = [
        'role' => RoleMiddleware::class,
    ];
}
