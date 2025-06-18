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
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b text-left">
                        <th className="py-2">User</th>
                        <th className="py-2">Description</th>
                        <th className="py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.data.map((log) => (
                        <tr key={log.id} className="border-b hover:bg-muted/50">
                            <td className="py-2 px-1">{log.user?.name ?? '-'}</td>
                            <td className="py-2 px-1">{log.description}</td>
                            <td className="py-2 px-1">{log.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AppLayout>
    );
}
