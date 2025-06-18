<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('admin can create user via modal', function () {
    $admin = User::factory()->create(['role' => 'admin']);

    $this->actingAs($admin)
        ->post('/users', [
            'name' => 'Modal User',
            'email' => 'modal@example.com',
            'password' => 'secret123',
            'role' => 'user',
        ])
        ->assertRedirect(route('users.index', absolute: false));

    $this->assertDatabaseHas('users', [
        'email' => 'modal@example.com',
        'name' => 'Modal User',
        'role' => 'user',
    ]);
});
