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
import { useTextObjectStore } from "@/store/useTextObjectStore";


const FontStyleSelection = () => {
    const { editorRef } = useEditorStore();
    const [currentFont, setCurrentFont] = useState("Arial");
    const { setCurrentFontFamily } = useTextObjectStore();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setCurrentFontFamily(currentFont);
    }, [currentFont, setCurrentFontFamily])

    useEffect(() => {
        if (!editorRef) return;

        const updateFontState = () => {
            const activeObject = editorRef.getActiveObject();
            if (activeObject && (activeObject.isType('i-text') || activeObject.isType('text'))) {
                setDisabled(false);
                setCurrentFont(activeObject.fontFamily || "Arial");
            } else {
                setDisabled(true);
            }
        };

        updateFontState(); // run initially

        editorRef.on("selection:created", updateFontState);
        editorRef.on("selection:updated", updateFontState);
        editorRef.on("selection:cleared", updateFontState); // attach handler for cleared selection

        return () => {
            editorRef.off("selection:created", updateFontState);
            editorRef.off("selection:updated", updateFontState);
            editorRef.off("selection:cleared", updateFontState);
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
    }

    return (
        <Select
            disabled={disabled}
            value={currentFont} onValueChange={handleFontChange}>
            <SelectTrigger
                hideIcon={true} className="w-[150px] rounded-md border p-1 h-8 shadow-none border-border flex items-center justify-center">
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