import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import AddUserModal from '@/components/add-user-modal';

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
    const { auth } = usePage<SharedData>().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex items-center justify-end mb-6">
                {auth.user.role === 'admin' && <AddUserModal />}
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full whitespace-nowrap text-sm">
                    <thead className="bg-primary/10 text-left">
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Created</th>
                        </tr>
                    </thead>
                    <tbody className="[&>tr]:odd:bg-primary/5">
                        {users.data.map((u) => (
                            <tr key={u.id} className="text-center sm:text-left">
                                <td className="px-4 py-2">{u.name}</td>
                                <td className="px-4 py-2">{u.email}</td>
                                <td className="px-4 py-2">{u.role}</td>
                                <td className="px-4 py-2">{u.created_at.slice(0, 10)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
