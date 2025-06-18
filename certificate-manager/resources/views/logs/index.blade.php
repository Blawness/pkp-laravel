@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Activity Logs</h1>
<table class="table-auto w-full">
    <thead>
        <tr>
            <th>User</th>
            <th>Description</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        @foreach($logs as $log)
        <tr>
            <td>{{ $log->user->name ?? '-' }}</td>
            <td>{{ $log->description }}</td>
            <td>{{ $log->created_at }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
{{ $logs->links() }}
@endsection
