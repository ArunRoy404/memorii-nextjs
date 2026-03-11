'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useParams, useRouter } from "next/navigation";
import { useEditorStore } from "@/store/useEditorStore";
import { useDeleteECard, useSaveECard } from "@/hooks/ECard/e-card.hook";

export function DiscardEditsDialog() {
    const router = useRouter()
    const { templateId } = useParams()
    const { showDiscardDialog, setShowDiscardDialog, pages, saveCurrentPage } = useEditorStore()
    const { mutate: saveECard, isPending } = useSaveECard({ id: templateId })
    const { mutate: deleteECard, isPending: isDeleting } = useDeleteECard(templateId, {
        onSuccess: () => {
            setShowDiscardDialog(false)
            router.push('/templates')
        }
    })


    const handleSaveEcard = () => {
        saveCurrentPage()
        saveECard({ pages: pages }, {
            onSuccess: () => {
                setShowDiscardDialog(false)
                router.push('/templates')
            }
        })
    }

    const handleDeleteEcard = () => {
        deleteECard()
    }

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
                    onClick={handleDeleteEcard}
                    disabled={isDeleting}
                    className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full py-3 px-6 text-center text-base font-semibold text-red-600"
                >
                    {isDeleting ? 'Deleting...' : 'Discard Edits'}
                </button>

                {/* Save Draft */}
                <button
                    onClick={handleSaveEcard}
                    disabled={isPending}
                    className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full border-t py-3 px-6 text-center text-base font-semibold"
                >
                    {isPending ? 'Saving...' : 'Save Draft'}
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