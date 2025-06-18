<!DOCTYPE html>
<html>
<head>
    <title>{{ config('app.name') }}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex">
    <aside class="w-48 bg-gray-200 min-h-screen p-4">
        <nav class="space-y-2">
            <a href="/" class="block">Dashboard</a>
            <a href="/certificates" class="block">Sertifikat</a>
            <a href="/users" class="block">User</a>
            <a href="/logs" class="block">Log</a>
        </nav>
    </aside>
    <main class="flex-1 p-6">
        @yield('content')
    </main>
</body>
</html>
