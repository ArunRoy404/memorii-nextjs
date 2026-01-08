import { promptsList } from "@/data/promptsList";
import { useEditorStore } from "@/store/useEditorStore";
import { useEffect, useState } from "react";

const PromptsContainer = () => {
    const { editorRef } = useEditorStore();
    const [isQuestion, setIsQuestion] = useState(false);


    useEffect(() => {
        if (!editorRef) return;

        const updatePromptState = () => {
            const activeObject = editorRef.getActiveObjects()[0]
            if (activeObject && activeObject.isMemoryQuestion) {
                setIsQuestion(true);
                
                // const lineCount = activeObject._textLines.length;
                // console.log(`This textbox has ${lineCount} lines.`);
            } else {
                setIsQuestion(false);
            }
        }

        updatePromptState()
        editorRef.on('selection:created', updatePromptState);
        editorRef.on('selection:updated', updatePromptState);
        editorRef.on('selection:cleared', updatePromptState);

        return () => {
            editorRef.off('selection:created', updatePromptState);
            editorRef.off('selection:updated', updatePromptState);
            editorRef.off('selection:cleared', updatePromptState);
        }
    }, [editorRef])


    const handleSelect = (prompt) => {
        const activeObject = editorRef.getActiveObjects()[0]
        const indexing = activeObject.text.slice(0, 3)
        const selectedQuestion = indexing + prompt
        activeObject.set({
            text: selectedQuestion
        })
        editorRef.requestRenderAll()
    };



    return (
        <div className={`${!isQuestion ? 'cursor-not-allowed' : ''}`}>
            <div className={` ${!isQuestion ? 'pointer-events-none opacity-30' : ''} flex flex-col gap-4 mt-4 max-h-[350px] overflow-y-auto pr-2 overflow-x-hidden transition-all`}>
                {promptsList.map((question, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(question)}
                        className="cursor-pointer group w-full text-left focus:outline-none py-1"
                    >
                        <p className="text-sm sm:text-[15px] font-medium text-muted-foreground transition-colors duration-200 group-hover:text-black">
                            <span className="relative inline-block pb-0.5">
                                {index + 1}. {question}
                                {/* Underline Hover Effect */}
                                <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
                            </span>
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PromptsContainer;