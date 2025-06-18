export interface Certificate {
    id: number;
    kode: string;
    nama_pemegang: string;
    no_sertifikat: string;
    luas_m2: number;
}

export default function CertificatePreviewTable({ certificates }: { certificates: Certificate[] }) {
    return (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Kode</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Nama Pemegang</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">No Sertifikat</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Luas (m2)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {certificates.map((c) => (
                        <tr key={c.id} className="hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{c.kode}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{c.nama_pemegang}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{c.no_sertifikat}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{c.luas_m2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
