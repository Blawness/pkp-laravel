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
            <div className="overflow-x-auto">
                <table className="min-w-full whitespace-nowrap text-sm">
                    <thead className="bg-primary/10 text-left">
                        <tr>
                            <th className="px-4 py-2">User</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody className="[&>tr]:odd:bg-primary/5">
                        {logs.data.map((log) => (
                            <tr key={log.id} className="text-center sm:text-left">
                                <td className="px-4 py-2">{log.user?.name ?? '-'}</td>
                                <td className="px-4 py-2">{log.description}</td>
                                <td className="px-4 py-2">{log.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
