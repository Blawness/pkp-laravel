import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Certificate {
    id: number;
    kode: string;
    nama_pemegang: string;
    no_sertifikat: string;
    luas_m2: number;
}

interface PageProps {
    certificates: {
        data: Certificate[];
    };
    search?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Certificates', href: '/certificates' },
];

export default function CertificatesIndexPage({ certificates, search }: PageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Certificates" />
            <div className="flex items-center justify-between mb-6">
                <Input
                    name="search"
                    placeholder="Search certificates..."
                    defaultValue={search}
                    className="w-1/3"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    Add Certificate
                </Button>
            </div>
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b text-left">
                        <th className="py-2">Kode</th>
                        <th className="py-2">Nama Pemegang</th>
                        <th className="py-2">No Sertifikat</th>
                        <th className="py-2">Luas (m2)</th>
                    </tr>
                </thead>
                <tbody>
                    {certificates.data.map((c) => (
                        <tr key={c.id} className="border-b hover:bg-muted/50">
                            <td className="py-2 px-1">{c.kode}</td>
                            <td className="py-2 px-1">{c.nama_pemegang}</td>
                            <td className="py-2 px-1">{c.no_sertifikat}</td>
                            <td className="py-2 px-1">{c.luas_m2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AppLayout>
    );
}
