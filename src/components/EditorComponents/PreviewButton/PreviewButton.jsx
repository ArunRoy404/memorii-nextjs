import { Button } from '@/components/ui/button'
import { useSaveECard } from '@/hooks/ECard/e-card.hook';
import { useEditorStore } from '@/store/useEditorStore';
import { useParams, useRouter } from 'next/navigation';


export default function PreviewButton() {
    const { templateId } = useParams()
    const { mutate: saveECard, isPending } = useSaveECard({
        id: templateId,
        loadingMessage: 'Preparing preview...',
        successMessage: 'Preview ready!'
    })
    const { pages, saveCurrentPage } = useEditorStore()
    const router = useRouter();


    const handlePreviewEcard = () => {
        saveCurrentPage()
        saveECard({ pages: pages }, {
            onSuccess() {
                router.push(`/preview/${templateId}`)
            }
        })

    }


    return (
        <Button
            onClick={handlePreviewEcard}
            isLoading={isPending}
            size="sm" className="w-full md:w-auto">
            Preview
        </Button>
    )
}