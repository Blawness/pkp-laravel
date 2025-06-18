import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Log {
    id: number;
    description: string;
    created_at: string;
    user?: {
        name: string;
    } | null;
}

interface PageProps {
    logs: {
        data: Log[];
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Logs', href: '/logs' },
];

export default function LogsIndexPage({ logs }: PageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Logs" />
            <div className="bg-gray-900 rounded-lg shadow overflow-x-auto mx-auto max-w-[calc(100%-2rem)]">
                <table className="min-w-full divide-y divide-gray-700 text-center">
                    <thead className="bg-gray-800 border-b border-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">User</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Description</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {logs.data.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-800">
                                <td className="px-6 py-4 text-sm text-gray-200">{log.user?.name ?? '-'}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{log.description}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{log.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
