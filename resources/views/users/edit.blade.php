@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Edit User</h1>
<form action="{{ route('users.update', $user) }}" method="post" class="space-y-2">
    @csrf
    @method('put')
    <input type="text" name="name" value="{{ $user->name }}" class="border w-full" />
    <input type="email" name="email" value="{{ $user->email }}" class="border w-full" />
    <input type="password" name="password" placeholder="Password" class="border w-full" />
    <select name="role" class="border w-full">
        <option value="user" {{ $user->role == 'user' ? 'selected' : '' }}>User</option>
        <option value="admin" {{ $user->role == 'admin' ? 'selected' : '' }}>Admin</option>
    </select>
    <button class="bg-blue-500 text-white px-3 py-1">Simpan</button>
</form>
@endsection
