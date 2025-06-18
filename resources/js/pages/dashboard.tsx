import AppLayout from '@/layouts/app-layout';
import CertificatePreviewTable, { type Certificate } from '@/components/certificate-preview-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
    certificates: Certificate[];
    search?: string;
}

export default function Dashboard() {
    const { certificates, search } = usePage<PageProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
                <Card className="sm:col-span-2 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Sertifikat</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form method="get" className="flex flex-wrap gap-2">
                            <Input name="search" defaultValue={search ?? ''} placeholder="Cari sertifikat..." />
                            <Button type="submit">Cari</Button>
                            <Button asChild variant="secondary">
                                <Link href="/certificates/create">Tambah Sertifikat</Link>
                            </Button>
                        </form>
                        <CertificatePreviewTable certificates={certificates} />
                        <div className="text-right">
                            <Link href="/certificates" className="text-primary hover:underline">
                                Lihat Semua
                            </Link>
                        </div>
                    </CardContent>
                </Card>
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
