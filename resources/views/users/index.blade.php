@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Users</h1>
<table class="table-auto w-full mb-4">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        @foreach($users as $user)
        <tr>
            <td>{{ $user->name }}</td>
            <td>{{ $user->email }}</td>
            <td>{{ $user->role }}</td>
            <td>{{ $user->created_at->format('Y-m-d') }}</td>
            <td>
                <a href="{{ route('users.edit', $user) }}" class="text-blue-500">Edit</a>
                <form action="{{ route('users.destroy', $user) }}" method="post" style="display:inline">
                    @csrf
                    @method('delete')
                    <button class="text-red-500" onclick="return confirm('Delete?')">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
{{ $users->links() }}
@endsection
