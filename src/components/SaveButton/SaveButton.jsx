import { Button } from '@/components/ui/button'
import { useSaveECard } from '@/hooks/ECard/e-card.hook';
import { useEditorStore } from '@/store/useEditorStore';
import { Save } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function SaveButton() {
    const { templateId } = useParams()
    const { mutate: saveECard, isPending } = useSaveECard(templateId)
    const { pages, saveCurrentPage } = useEditorStore()

    const handleSaveEcard = () => {
        saveCurrentPage()
        saveECard({ pages: pages })
    }


    return (
        <Button
            onClick={handleSaveEcard}
            isLoading={isPending} variant='ghost' className='p-1!' size="sm">
            <Save className="w-4 h-4" />
        </Button>
    )
}