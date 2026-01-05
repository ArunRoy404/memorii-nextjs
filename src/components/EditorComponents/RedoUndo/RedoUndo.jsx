import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { applyCommonStyles } from '@/services/CommonControlStyle';
import { useEditorStore } from '@/store/useEditorStore';
import { useRedoUndoStateStore } from '@/store/useRedoUndoStateStore';
import { Redo2, Undo2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';



const RedoUndo = ({ className }) => {
    const { editorRef, currentPage } = useEditorStore();
    const { getPageState, setHistoryAt, setRedoStackAt } = useRedoUndoStateStore();

    const [lastPage, setLastPage] = useState(null);
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const isLocked = useRef(false);
    


    // load state to editorRef 
    const loadState = async (stateToLoad) => {
        isLocked.current = true;
        await editorRef.loadFromJSON(stateToLoad);

        editorRef.getObjects().forEach((obj) => {
            if (typeof applyCommonStyles === 'function') applyCommonStyles(obj);
        });

        editorRef.renderAll();
        isLocked.current = false;
    };



    // save state to history and redoStack
    const saveState = useCallback(() => {
        if (isLocked.current || !editorRef || !editorRef.backgroundColor) return;

        const json = JSON.stringify(editorRef.toDatalessJSON());
        setHistory((prev) => {
            if (prev.length > 0 && prev[prev.length - 1] === json) return prev;

            const newHistory = [...prev, json];
            return newHistory.slice(-30);
        });
        setRedoStack([]);
    }, [editorRef]);



    // Undo Function 
    const handleUndo = () => {
        if (history.length <= 1) return;

        const historyCopy = [...history];
        const currentState = historyCopy.pop();
        const previousState = historyCopy[historyCopy.length - 1];

        setRedoStack(prev => [...prev, currentState]);
        setHistory(historyCopy);

        loadState(previousState);
    };



    // Redo Function 
    const handleRedo = () => {
        if (redoStack.length === 0) return;

        const redoCopy = [...redoStack];
        const nextState = redoCopy.pop();

        setHistory(prev => [...prev, nextState]);
        setRedoStack(redoCopy);

        loadState(nextState);
    };





    useEffect(() => {
        // if (!editorRef || !editorRef.backgroundColor || lastPage === currentPage) return;
        if (!editorRef || !editorRef.backgroundColor ) return;
        
        // setLastPage(currentPage);
        // saveState();

        // editorRef.on('object:added', saveState);
        editorRef.on('object:modified', saveState);
        editorRef.on('object:removed', saveState);

        return () => {
            // editorRef.off('object:added', saveState);
            editorRef.off('object:modified', saveState);
            editorRef.off('object:removed', saveState);
        };
    }, [editorRef, saveState]);







    // set page history and redoStack when history or redoStack changes
    // useEffect(() => {
    //     if (currentPage >= 0) {
    //         setHistoryAt(currentPage, history);
    //         setRedoStackAt(currentPage, redoStack);
    //     }
    // }, [history, redoStack, setHistoryAt, setRedoStackAt]);



    // load history and redoStack when currentPage changes
    // useEffect(() => {
    //     if (lastPage === currentPage) return;

    //     isLocked.current = true;
    //     const saved = getPageState(currentPage);
    //     setHistory(saved.history);
    //     setRedoStack(saved.redoStack);
    //     isLocked.current = false;
    // }, [currentPage]);





    return (
        <div className={cn("flex gap-2", className)}>
            {history.length}
            <Button onClick={handleUndo} disabled={history.length <= 1} variant='ghost' className='p-1!' size="sm">
                <Undo2 className="w-4 h-4" />
            </Button>
            <Button onClick={handleRedo} disabled={redoStack.length === 0} variant='ghost' className='p-1!' size="sm">
                <Redo2 className="w-4 h-4" />
            </Button>
            {redoStack.length}
        </div>
    );
};


export default RedoUndo