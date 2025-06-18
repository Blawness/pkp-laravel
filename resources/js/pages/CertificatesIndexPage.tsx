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
            <div className="bg-gray-900 rounded-lg shadow overflow-x-auto mx-auto max-w-[calc(100%-2rem)]">
                <table className="min-w-full divide-y divide-gray-700 text-center">
                    <thead className="bg-gray-800 border-b border-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">No</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Kode</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Nama Pemegang</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Surat Hak</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">No Sertifikat</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Letak Tanah</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Luas (M2)</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Tgl Terbit</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Surat Ukur</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">NIB</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Pendaftaran Pertama</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {certificates.data.map((c, idx) => (
                            <tr key={c.id} className="hover:bg-gray-800">
                                <td className="px-6 py-4 text-sm text-gray-200">{idx + 1}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.kode}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.nama_pemegang}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.surat_hak}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.no_sertifikat}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.lokasi_tanah}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.luas_m2}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.tgl_terbit ?? '-'}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.surat_ukur ?? '-'}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.nib ?? '-'}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{c.pendaftaran_pertama ?? '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
