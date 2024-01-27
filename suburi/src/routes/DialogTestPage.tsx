import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

const DialogTestPage = () => {
    return (
        <>
            <div>this is a test page about dialog component</div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Open</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>ダイアログのテスト</DialogTitle>
                        <DialogDescription>
                            これはダイアログのテストです
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-end">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                閉じる
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DialogTestPage;
