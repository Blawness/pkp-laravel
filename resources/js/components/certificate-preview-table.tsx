export interface Certificate {
    id: number;
    kode: string;
    nama_pemegang: string;
    no_sertifikat: string;
    luas_m2: number;
}

export default function CertificatePreviewTable({ certificates }: { certificates: Certificate[] }) {
    return (
        <div className="bg-gray-900 rounded-lg shadow overflow-x-auto mx-auto max-w-[calc(100%-2rem)]">
            <table className="min-w-full divide-y divide-gray-700 text-center">
                <thead className="bg-gray-800 border-b border-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-300">Kode</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-300">Nama Pemegang</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-300">No Sertifikat</th>
                        <th className="px-6 py-3 text-sm font-semibold text-gray-300">Luas (m2)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {certificates.map((c) => (
                        <tr key={c.id} className="hover:bg-gray-800">
                            <td className="px-6 py-4 text-sm text-gray-200">{c.kode}</td>
                            <td className="px-6 py-4 text-sm text-gray-200">{c.nama_pemegang}</td>
                            <td className="px-6 py-4 text-sm text-gray-200">{c.no_sertifikat}</td>
                            <td className="px-6 py-4 text-sm text-gray-200">{c.luas_m2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
