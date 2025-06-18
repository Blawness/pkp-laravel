import { router, useForm } from '@inertiajs/react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import InputError from '@/components/input-error';
import { FormEventHandler } from 'react';

export default function AddUserModal() {
    const { data, setData, post, processing, reset, errors, clearErrors } = useForm({
        name: '',
        email: '',
        password: '',
        role: 'user',
    });

    const close = () => {
        clearErrors();
        reset();
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('users.store'), {
            onSuccess: () => {
                close();
                router.visit(route('users.index'), { preserveScroll: true });
            },
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    className="bg-indigo-500 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-colors text-white font-medium rounded-lg px-4 py-2"
                >
                    Add User
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                </DialogHeader>
                <form onSubmit={submit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} required />
                        <InputError message={errors.name} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} required />
                        <InputError message={errors.email} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} required />
                        <InputError message={errors.password} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="role">Role</Label>
                        <Select value={data.role} onValueChange={(value) => setData('role', value)}>
                            <SelectTrigger id="role">
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="user">User</SelectItem>
                            </SelectContent>
                        </Select>
                        <InputError message={errors.role} />
                    </div>
                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={close}>
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing}>
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
