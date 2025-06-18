import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface PageProps extends SharedData {
    stats: {
        certificates: number;
        users: number;
        logs: number;
    };
}

export default function Dashboard() {
    const { stats } = usePage<PageProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Sertifikat</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{stats.certificates}</p>
                        <div className="mt-2">
                            <Link href="/certificates" className="text-primary hover:underline text-sm">
                                View All
                            </Link>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>User</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{stats.users}</p>
                        <div className="mt-2">
                            <Link href="/users" className="text-primary hover:underline text-sm">
                                View All
                            </Link>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Log</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{stats.logs}</p>
                        <div className="mt-2">
                            <Link href="/logs" className="text-primary hover:underline text-sm">
                                View All
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
