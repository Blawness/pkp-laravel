export interface Certificate {
    id: number;
    kode: string;
    nama_pemegang: string;
    no_sertifikat: string;
    luas_m2: number;
}

export default function CertificatePreviewTable({ certificates }: { certificates: Certificate[] }) {
    return (
        <table className="w-full text-sm">
            <thead>
                <tr className="text-left">
                    <th className="py-2">Kode</th>
                    <th className="py-2">Nama Pemegang</th>
                    <th className="py-2">No Sertifikat</th>
                    <th className="py-2">Luas (m2)</th>
                </tr>
            </thead>
            <tbody>
                {certificates.map((c) => (
                    <tr key={c.id} className="border-b last:border-none">
                        <td className="py-2">{c.kode}</td>
                        <td className="py-2">{c.nama_pemegang}</td>
                        <td className="py-2">{c.no_sertifikat}</td>
                        <td className="py-2">{c.luas_m2}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
