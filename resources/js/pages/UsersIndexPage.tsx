import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
}

interface PageProps {
    users: {
        data: User[];
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Users', href: '/users' },
];

export default function UsersIndexPage({ users }: PageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex items-center justify-end mb-6">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    Add User
                </Button>
            </div>
            <div className="bg-gray-900 rounded-lg shadow overflow-x-auto mx-auto max-w-[calc(100%-2rem)]">
                <table className="min-w-full divide-y divide-gray-700 text-center">
                    <thead className="bg-gray-800 border-b border-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Name</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Email</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Role</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Created</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {users.data.map((u) => (
                            <tr key={u.id} className="hover:bg-gray-800">
                                <td className="px-6 py-4 text-sm text-gray-200">{u.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{u.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{u.role}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{u.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
