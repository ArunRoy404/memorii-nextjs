'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useEditorStore } from "@/store/useEditorStore";

export function DiscardEditsDialog() {
    const router = useRouter()
    const { showDiscardDialog, setShowDiscardDialog } = useEditorStore()

    return (
        <Dialog open={showDiscardDialog} onOpenChange={setShowDiscardDialog}>
            <DialogTrigger asChild>
                <button
                    className="cursor-pointer text-primary underline font-semibold"
                    onClick={() => setShowDiscardDialog(true)}
                >
                    Exit
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-[360px] gap-0 rounded-2xl px-0 pt-6 pb-0 border-0 bg-white shadow-xl">
                <DialogHeader className="px-6 pb-3">
                    <DialogTitle className="text-center text-lg font-semibold">
                        Discard edits?
                    </DialogTitle>
                    <DialogDescription className="mt-2 text-center text-sm text-muted-foreground">
                        If you go back now, you&apos;ll lose all of the edits you&apos;ve made.
                    </DialogDescription>
                </DialogHeader>

                {/* Discard */}
                <button
                    onClick={() => {
                        setShowDiscardDialog(false)
                        router.push('/templates')
                    }}
                    className="cursor-pointer w-full py-3 px-6 text-center text-base font-semibold text-red-600"
                >
                    Discard
                </button>

                {/* Save Draft */}
                <button
                    onClick={() => {
                        setShowDiscardDialog(false)
                        router.push('/templates')
                    }}
                    className="cursor-pointer w-full border-t py-3 px-6 text-center text-base font-semibold"
                >
                    Save Draft
                </button>

                {/* Keep Editing */}
                <button
                    onClick={() => setShowDiscardDialog(false)}
                    className="cursor-pointer w-full border-t py-3 px-6 text-center text-base font-semibold"
                >
                    Keep Editing
                </button>
            </DialogContent>
        </Dialog>
    )
}