import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
                {(Object.keys(stats) as Array<keyof PageProps['stats']>).map((key) => (
                    <Card key={key} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="capitalize">{key}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-start">
                            <p className="text-4xl font-bold">{stats[key]}</p>
                            <Link
                                href={`/${key}`}
                                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark"
                            >
                                View All <ChevronRight className="ml-1 size-4" />
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </AppLayout>
    );
}
