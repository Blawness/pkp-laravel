import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
                <Link href="/certificates" className="block rounded-lg border p-6 text-center hover:bg-gray-50 dark:hover:bg-neutral-800">
                    Sertifikat
                </Link>
                <Link href="/users" className="block rounded-lg border p-6 text-center hover:bg-gray-50 dark:hover:bg-neutral-800">
                    User
                </Link>
                <Link href="/logs" className="block rounded-lg border p-6 text-center hover:bg-gray-50 dark:hover:bg-neutral-800">
                    Log
                </Link>
            </div>
        </AppLayout>
    );
}
