import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import CertificateForm from '@/components/certificate-form';

interface Certificate {
    id: number;
    kode: string;
    nama_pemegang: string;
    surat_hak: string;
    no_sertifikat: string;
    lokasi_tanah: string;
    luas_m2: number;
    tgl_terbit?: string | null;
    surat_ukur?: string | null;
    nib?: string | null;
    pendaftaran_pertama?: string | null;
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

            {/* Search + Add Button */}
            <div className="flex items-center justify-between mb-6">
                <Input
                    name="search"
                    placeholder="Search certificates..."
                    defaultValue={search}
                    className="w-1/3"
                />

                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            size="sm"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-4 py-2"
                        >
                            Add Certificate
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                        <DialogHeader>
                            <DialogTitle>Add Certificate</DialogTitle>
                        </DialogHeader>
                        <CertificateForm />
                    </DialogContent>
                </Dialog>
            </div>

            {/* Certificates Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full whitespace-nowrap text-sm">
                    <thead className="bg-primary/10 text-left">
                        <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Kode</th>
                            <th className="px-4 py-2">Nama Pemegang</th>
                            <th className="px-4 py-2">Surat Hak</th>
                            <th className="px-4 py-2">No Sertifikat</th>
                            <th className="px-4 py-2">Letak Tanah</th>
                            <th className="px-4 py-2">Luas (M2)</th>
                            <th className="px-4 py-2">Tgl Terbit</th>
                            <th className="px-4 py-2">Surat Ukur</th>
                            <th className="px-4 py-2">NIB</th>
                            <th className="px-4 py-2">Pendaftaran Pertama</th>
                        </tr>
                    </thead>
                    <tbody className="[&>tr]:odd:bg-primary/5">
                        {certificates.data.map((c, idx) => (
                            <tr key={c.id} className="text-center sm:text-left">
                                <td className="px-4 py-2">{idx + 1}</td>
                                <td className="px-4 py-2">{c.kode}</td>
                                <td className="px-4 py-2">{c.nama_pemegang}</td>
                                <td className="px-4 py-2">{c.surat_hak}</td>
                                <td className="px-4 py-2">{c.no_sertifikat}</td>
                                <td className="px-4 py-2">{c.lokasi_tanah}</td>
                                <td className="px-4 py-2">{c.luas_m2}</td>
                                <td className="px-4 py-2">{c.tgl_terbit ?? '-'}</td>
                                <td className="px-4 py-2">{c.surat_ukur ?? '-'}</td>
                                <td className="px-4 py-2">{c.nib ?? '-'}</td>
                                <td className="px-4 py-2">{c.pendaftaran_pertama ?? '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
