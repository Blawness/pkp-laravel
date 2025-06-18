@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Login</h1>
<form action="{{ route('login') }}" method="post" class="space-y-2">
    @csrf
    <input type="email" name="email" placeholder="Email" class="border w-full" />
    <input type="password" name="password" placeholder="Password" class="border w-full" />
    <button class="bg-blue-500 text-white px-3 py-1">Login</button>
</form>
@endsection
