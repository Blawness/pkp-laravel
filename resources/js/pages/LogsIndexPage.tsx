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
            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {logs.data.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.user?.name ?? '-'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
