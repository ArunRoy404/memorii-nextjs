import { useEditorStore } from "@/store/useEditorStore";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select";
import { FONT_OPTIONS, showSelectionError } from "@/lib/fonts"; 
import { useEffect, useState } from "react";


const FontStyleSelection = () => {
    const { editorRef } = useEditorStore();
    const [currentFont, setCurrentFont] = useState("Arial");


    useEffect(() => {
        if (!editorRef) return;

        const updateFontState = () => {
            const activeObject = editorRef.getActiveObject();
            if (activeObject && (activeObject.isType('i-text') || activeObject.isType('text'))) {
                setCurrentFont(activeObject.fontFamily || "Arial");
            }
        };


        updateFontState();


        editorRef.on("selection:created", updateFontState);
        editorRef.on("selection:updated", updateFontState);
        editorRef.on("selection:cleared", () => setCurrentFont("Arial"));

        return () => {
            editorRef.off("selection:created", updateFontState);
            editorRef.off("selection:updated", updateFontState);
            editorRef.off("selection:cleared");
        };
    }, [editorRef]);



    const handleFontChange = (newFontFamily) => {
        if (!editorRef) return;

        const activeObject = editorRef.getActiveObject();

        if (!activeObject || !(activeObject.isType('i-text') || activeObject.isType('text'))) {
            showSelectionError();
            return;
        }

        activeObject.set({
            fontFamily: newFontFamily,
        });

        setCurrentFont(newFontFamily);
        editorRef.renderAll();
    };



    return (
        <Select value={currentFont} onValueChange={handleFontChange}>
            <SelectTrigger hideIcon={true} className="w-[150px] rounded-md border p-1 h-8 shadow-none border-border flex items-center justify-center">
                <SelectValue placeholder="Select Font" />
            </SelectTrigger>
            <SelectContent>
                {FONT_OPTIONS.map((font) => (
                    <SelectItem
                        key={font.value}
                        value={font.value}
                        style={{ fontFamily: font.value }}
                    >
                        {font.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default FontStyleSelection;