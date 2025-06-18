@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Tambah User</h1>
<form action="{{ route('users.store') }}" method="post" class="space-y-2">
    @csrf
    <input type="text" name="name" placeholder="Name" class="border w-full" />
    <input type="email" name="email" placeholder="Email" class="border w-full" />
    <input type="password" name="password" placeholder="Password" class="border w-full" />
    <select name="role" class="border w-full">
        <option value="user">User</option>
        <option value="admin">Admin</option>
    </select>
    <button class="bg-blue-500 text-white px-3 py-1">Simpan</button>
</form>
@endsection
