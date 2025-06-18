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
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b text-left">
                        <th className="py-2">Name</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Role</th>
                        <th className="py-2">Created</th>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map((u) => (
                        <tr key={u.id} className="border-b hover:bg-muted/50">
                            <td className="py-2 px-1">{u.name}</td>
                            <td className="py-2 px-1">{u.email}</td>
                            <td className="py-2 px-1">{u.role}</td>
                            <td className="py-2 px-1">{u.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AppLayout>
    );
}
