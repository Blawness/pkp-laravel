import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CertificateForm({ onSuccess }: { onSuccess?: () => void }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        kode: '',
        nama_pemegang: '',
        surat_hak: '',
        no_sertifikat: '',
        lokasi_tanah: '',
        luas_m2: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('certificates.store'), {
            onSuccess: () => {
                reset();
                onSuccess?.();
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-2">
                <Label htmlFor="kode">Kode</Label>
                <Input id="kode" value={data.kode} onChange={(e) => setData('kode', e.target.value)} required />
                <InputError message={errors.kode} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="nama_pemegang">Nama Pemegang</Label>
                <Input id="nama_pemegang" value={data.nama_pemegang} onChange={(e) => setData('nama_pemegang', e.target.value)} required />
                <InputError message={errors.nama_pemegang} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="surat_hak">Surat Hak</Label>
                <Input id="surat_hak" value={data.surat_hak} onChange={(e) => setData('surat_hak', e.target.value)} required />
                <InputError message={errors.surat_hak} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="no_sertifikat">No Sertifikat</Label>
                <Input id="no_sertifikat" value={data.no_sertifikat} onChange={(e) => setData('no_sertifikat', e.target.value)} required />
                <InputError message={errors.no_sertifikat} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="lokasi_tanah">Lokasi Tanah</Label>
                <Input id="lokasi_tanah" value={data.lokasi_tanah} onChange={(e) => setData('lokasi_tanah', e.target.value)} required />
                <InputError message={errors.lokasi_tanah} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="luas_m2">Luas (m2)</Label>
                <Input id="luas_m2" type="number" value={data.luas_m2} onChange={(e) => setData('luas_m2', e.target.value)} required />
                <InputError message={errors.luas_m2} />
            </div>
            <div className="flex justify-end gap-2">
                <Button type="submit" disabled={processing} className="bg-primary hover:bg-primary/90 text-white font-medium rounded-md px-4 py-2 shadow-sm transition">
                    Save
                </Button>
            </div>
        </form>
    );
}
