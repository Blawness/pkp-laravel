@extends('layouts.app')

@section('content')
<h1 class="text-xl font-bold mb-4">Activity Logs</h1>
<div class="overflow-x-auto bg-white shadow rounded-lg mb-4">
    <table class="min-w-full divide-y divide-gray-200">
        <thead>
            <tr class="bg-gray-50">
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">User</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            @foreach($logs as $log)
            <tr class="hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $log->user->name ?? '-' }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $log->description }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ $log->created_at }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
{{ $logs->links() }}
@endsection
