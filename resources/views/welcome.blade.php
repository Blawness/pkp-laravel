@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold">Dashboard</h1>
<p>Welcome to Certificate Manager.</p>
<ul class="mt-4 space-y-2">
    <li><a href="/certificates" class="text-blue-500 hover:underline">Sertifikat</a></li>
    <li><a href="/users" class="text-blue-500 hover:underline">User</a></li>
    <li><a href="/logs" class="text-blue-500 hover:underline">Log</a></li>
</ul>
@endsection
