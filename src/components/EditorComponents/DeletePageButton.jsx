import { useDeletePageEcard } from '@/hooks/ECard/e-card.hook';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';
import { useEditorStore } from '@/store/useEditorStore';
import { useParams } from 'next/navigation';



const DeletePageButton = () => {
    const { templateId } = useParams()
    const { mutate: deletePage, isPending } = useDeletePageEcard(templateId)
    const { currentPage, pages, setPages, setCurrentPage } = useEditorStore()
    const totalPage = pages.length

    // const handleSetCurrentPage = () => {

    //     const newPages = [...pages]
    //         .filter((_, index) => index !== currentPage)
    //         .map((page, index) => ({ ...page, page_index: index }))

    //     const newCurrentPage = currentPage >= newPages.length
    //         ? newPages.length - 1
    //         : currentPage


    //     console.log(newPages);
    //     console.log(newCurrentPage);

    //     setPages(newPages)
    //     setCurrentPage(newCurrentPage)
    // }


    const handleSetCurrentPage = () => {
        const newPages = pages
            .filter((_, index) => index !== currentPage)
            .map((page, index) => ({ ...page, page_index: index }))

        let newCurrentPage
        if (currentPage >= newPages.length) {
            newCurrentPage = newPages.length - 1  // was last page
        } else if (currentPage === 0) {
            newCurrentPage = 0                     // was first page
        } else {
            newCurrentPage = currentPage - 1       // go to previous 👈 key fix
        }

        setPages(newPages)
        setCurrentPage(newCurrentPage)
    }


    const handleDeletePage = () => {
        if (totalPage === 1) return
        deletePage({ page_index: currentPage })
        handleSetCurrentPage()
    }

    return (
        <Button
            onClick={handleDeletePage}
            disabled={isPending || totalPage === 1}
            variant='outline' notImplemented size="sm" className="text-red-600 border-red-600 hover:text-red-600 hover:border-red-600 flex items-center gap-1 justify-center w-full sm:w-auto">
            <Trash className="w-4 h-4 sm:w-5 sm:h-5" />
            Delete Page
        </Button>
    );
};

export default DeletePageButton;