import { useEditorStore } from '@/store/useEditorStore';
import { Button } from '../ui/button';
import { Eraser } from 'lucide-react';

const ClearPageButton = () => {
    const { editorRef } = useEditorStore();

    const handleClearPage = () => {
        if (!editorRef || !editorRef?.backgroundColor || editorRef?.layout !== 'blank') return
        
        const objects = editorRef.getObjects();
        editorRef.remove(...objects);
        editorRef.renderAll();

    }

    return (
        <Button variant='outline' onClick={handleClearPage} size="sm" className="flex items-center gap-1 justify-center w-full sm:w-auto">
            <Eraser className="w-4 h-4 sm:w-5 sm:h-5" />
            Clear Page
        </Button>
    );
};

export default ClearPageButton;