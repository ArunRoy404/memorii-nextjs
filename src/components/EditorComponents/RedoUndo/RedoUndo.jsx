import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { applyCommonStyles } from '@/services/CommonControlStyle';
import { useEditorStore } from '@/store/useEditorStore';
import { useRedoUndoStateStore } from '@/store/useRedoUndoStateStore';
import { Redo2, Save, Undo2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';



const RedoUndo = ({ className }) => {
    const { editorRef, currentPage } = useEditorStore();
    const { setIsLockedRef, getPageState, setHistoryAt, setRedoStackAt } = useRedoUndoStateStore();

    const [lastPage, setLastPage] = useState(null);
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const isLocked = useRef(false);


    useEffect(() => {
        setIsLockedRef(isLocked);
    }, [setIsLockedRef]);



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


    const saveFirstState = useCallback(() => {
        if (isLocked.current || !editorRef || !editorRef.backgroundColor) return;

        const json = JSON.stringify(editorRef.toDatalessJSON());
        setHistory([json]);
        setRedoStack([]);
    }, [editorRef]);



    // save state to history and redoStack
    const saveState = useCallback((objType, opType) => {
        if (objType !== 'image' && opType === 'added') return
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
        if (!editorRef || !editorRef.backgroundColor) return;


        if (history.length === 0) {
            saveFirstState();
            return;
        }

        const handleAdded = (e) => saveState(e?.target?.type, 'added');
        const handleModified = (e) => saveState(e?.target?.type, 'modified');
        const handleRemoved = (e) => saveState(e?.target?.type, 'removed');

        editorRef.on('object:added', handleAdded);
        editorRef.on('object:modified', handleModified);
        editorRef.on('object:removed', handleRemoved);

        return () => {
            editorRef.off('object:added', handleAdded);
            editorRef.off('object:modified', handleModified);
            editorRef.off('object:removed', handleRemoved);
        };
    }, [editorRef, saveState]);


    // set page history and redoStack when history or redoStack changes
    useEffect(() => {
        if (currentPage >= 0) {
            if (lastPage === currentPage) return;
            isLocked.current = true;

            // making copy of stack 
            const currentHistoryCopy = [...history];
            const currentRedoStackCopy = [...redoStack];

            // loading current page stack 
            const saved = getPageState(currentPage);
            setHistory(saved.history);
            setRedoStack(saved.redoStack);

            // setting the copy state to last page 
            setHistoryAt(lastPage, currentHistoryCopy);
            setRedoStackAt(lastPage, currentRedoStackCopy);
            isLocked.current = false;
            setLastPage(currentPage);
        }
    }, [currentPage]);



    return (
        <div className={cn("flex gap-2", className)}>
            <p>{history.length}</p>
            {/* {history.length} */}
            <Button onClick={handleUndo} disabled={history.length <= 1} variant='ghost' className='p-1!' size="sm">
                <Undo2 className="w-4 h-4" />
            </Button>
            <Button onClick={handleRedo} disabled={redoStack.length === 0} variant='ghost' className='p-1!' size="sm">
                <Redo2 className="w-4 h-4" />
            </Button>
            {/* {redoStack.length} */}
            <Button notImplemented variant='ghost' className='p-1!' size="sm">
                <Save className="w-4 h-4" />
            </Button>

            {/* test mode  */}
            {/* <Button onClick={() => downloadJsonVariable(pages[0], 'grid-layout-image-json.json')} variant='ghost' className='p-1!' size="sm">
                <Save className="w-4 h-4" />
            </Button> */}
        </div>
    );
};


export default RedoUndo
