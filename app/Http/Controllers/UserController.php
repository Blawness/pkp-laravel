<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\ActivityLog;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::paginate(10);
        return view('users.index', compact('users'));
    }

    public function create()
    {
        return view('users.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|unique:users,name',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'role' => 'required|in:admin,user',
        ]);
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);
        ActivityLog::create(['user_id' => $request->user()->id, 'description' => 'create user '.$user->id]);
        return redirect()->route('users.index');
    }

    public function edit(User $user)
    {
        return view('users.edit', compact('user'));
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required|unique:users,name,' . $user->id,
            'email' => 'required|email|unique:users,email,' . $user->id,
            'password' => 'nullable|min:6',
            'role' => 'required|in:admin,user',
        ]);
        if ($data['password']) {
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }
        $user->update($data);
        ActivityLog::create(['user_id' => $request->user()->id, 'description' => 'update user '.$user->id]);
        return redirect()->route('users.index');
    }

    public function destroy(User $user)
    {
        $user->delete();
        ActivityLog::create(['user_id' => $request->user()->id, 'description' => 'delete user '.$user->id]);
        return redirect()->route('users.index');
    }
}
