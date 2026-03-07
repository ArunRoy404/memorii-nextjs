import { useDeletePageEcard } from '@/hooks/ECard/e-card.hook';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';
import { useEditorStore } from '@/store/useEditorStore';
import { useParams } from 'next/navigation';



const DeletePageButton = () => {
    const { templateId } = useParams()
    const { mutate: deletePage, isPending } = useDeletePageEcard(templateId)
    const { currentPage } = useEditorStore()


    const handleDeletePage = () => {
        deletePage({ page_index: currentPage })
    }

    return (
        <Button
            onClick={handleDeletePage}
            disabled={isPending}
            variant='outline' notImplemented size="sm" className="text-red-600 border-red-600 hover:text-red-600 hover:border-red-600 flex items-center gap-1 justify-center w-full sm:w-auto">
            <Trash className="w-4 h-4 sm:w-5 sm:h-5" />
            Delete Page
        </Button>
    );
};

export default DeletePageButton;