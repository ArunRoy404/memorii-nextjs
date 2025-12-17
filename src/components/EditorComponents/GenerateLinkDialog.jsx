"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link2 } from "lucide-react";
import { toast } from "sonner";




export function GenerateLinkDialog({ text, setIsError }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={() => {
            if (!text && !open) {
                setIsError(true)
                return
            }
            setIsError(false)
            setOpen(!open)
        }}>
            <DialogTrigger asChild>
                <Button
                    variant='link'
                    className='absolute bottom-10 left-20 p-0  underline hover:scale-100! active:scale-100! text-envelope-text'
                >
                    Generate the link
                </Button>
            </DialogTrigger>



            <DialogContent
                className="max-w-[360px] gap-0 rounded-2xl px-0 pt-6 border-0 bg-white shadow-xl pb-3"
            >
                <DialogHeader className="px-6 pb-3">
                    <DialogTitle className="text-lg font-semibold text-icon">
                        <button className='flex items-center gap-2 cursor-pointer'
                            onClick={() => toast.error("feature not implemented yet")}
                        >
                            <Link2 />
                            Copy link
                        </button>
                    </DialogTitle>

                    <DialogDescription className="mt-2text-sm text-icon">
                        <span className="font-bold">Anyone with the link</span> <br />
                        <span>Anyone who has the link can access this card. </span>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    );
}
