import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { applyCommonStyles } from '@/services/CommonControlStyle';
import { useEditorStore } from '@/store/useEditorStore';
import { Redo2, Undo2 } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';


const RedoUndo = ({ className }) => {
    const { editorRef } = useEditorStore();
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const isLocked = useRef(false);


    const saveState = useCallback(() => {
        if (isLocked.current || !editorRef) return;

        const json = JSON.stringify(editorRef.toDatalessJSON());

        setHistory((prev) => {
            if (prev.length > 0 && prev[prev.length - 1] === json) return prev;

            const newHistory = [...prev, json];
            return newHistory.slice(-50);
        });

        setRedoStack([]);
    }, [editorRef]);




    useEffect(() => {
        if (!editorRef) return;

        saveState();

        // editorRef.on('object:added', saveState);
        editorRef.on('object:modified', saveState);
        editorRef.on('object:removed', saveState);

        return () => {
            // editorRef.off('object:added', saveState);
            editorRef.off('object:modified', saveState);
            editorRef.off('object:removed', saveState);
        };
    }, [editorRef, saveState]);





    const loadState = async (stateToLoad) => {
        isLocked.current = true;
        await editorRef.loadFromJSON(stateToLoad);

        editorRef.getObjects().forEach((obj) => {
            if (typeof applyCommonStyles === 'function') applyCommonStyles(obj);
        });

        editorRef.renderAll();
        isLocked.current = false;
    };


    const handleUndo = () => {
        if (history.length <= 1) return;

        const historyCopy = [...history];
        const currentState = historyCopy.pop();
        const previousState = historyCopy[historyCopy.length - 1];

        setRedoStack(prev => [...prev, currentState]);
        setHistory(historyCopy);

        loadState(previousState);
    };


    const handleRedo = () => {
        if (redoStack.length === 0) return;

        const redoCopy = [...redoStack];
        const nextState = redoCopy.pop();

        setHistory(prev => [...prev, nextState]);
        setRedoStack(redoCopy);

        loadState(nextState);
    };


    return (
        <div className={cn("flex gap-2", className)}>
            {history.length}
            <Button onClick={handleUndo} disabled={history.length <= 1} variant='ghost' className='p-1!' size="sm">
                <Undo2 className="w-4 h-4" />
            </Button>
            <Button onClick={handleRedo} disabled={redoStack.length === 0} variant='ghost' className='p-1!' size="sm">
                <Redo2 className="w-4 h-4" />
            </Button>
        </div>
    );
};


export default RedoUndo