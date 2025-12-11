import React from "react";
import { DropdownMenuContent } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
// 💡 Your Icon Imports
import {
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    TextAlignCenter,
    List,
} from "lucide-react";
// 💡 State & Utility Imports
import { FONT_OPTIONS, showSelectionError } from "@/lib/fonts"; // Adjust path as needed
import { useEditorStore } from "@/store/useEditorStore";


const ICONS = [
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    TextAlignCenter,
    List,
];

const TextOptions = () => {
    const { editorRef } = useEditorStore();
    const [currentFont, setCurrentFont] = React.useState("Arial");

    React.useEffect(() => {
        if (!editorRef) return;

        const updateFontState = () => {
            const activeObject = editorRef.getActiveObject();
            if (activeObject && (activeObject.isType('i-text') || activeObject.isType('text'))) {
                setCurrentFont(activeObject.fontFamily || "Arial");
            }
        };

        // Initial check
        updateFontState();

        // Event listeners
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
        <DropdownMenuContent
            side="left"
            align="start"
            className="space-y-2 rounded-2xl p-3 text-center"
        >
            {/* 💡 FONT DROPDOWN IMPLEMENTATION */}
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

            {/* Font Size Control Placeholder - keeping layout but removing static 'Inter' */}
            <p className="rounded-md border p-1">Inter</p>

            <div className="flex items-center justify-center gap-2 rounded-md border p-1 w-[150px]">
                <span className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-1 rounded">-</span>
                <span className="text-xs">27</span>
                <span className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-1 rounded">+</span>
            </div>


            <div className="flex flex-col items-center gap-1">
                <span>A</span>
                <div className="h-1 w-6 rounded-[10px] bg-[linear-gradient(90deg,#E0320E_0%,#FE8E00_17.78%,#FACE00_30.77%,#9FFE01_49.61%,#66FE35_66.35%,#01C3FD_86.15%,#0836E6_100%)]" />
            </div>

            <div className="flex flex-col items-center gap-1">
                {ICONS.map((Icon) => (
                    <Button
                        key={Icon.displayName ?? Icon.name}
                        variant="ghost"
                        size="icon"
                        className="mx-auto flex h-7 w-7 flex-col items-center justify-center p-0"
                    >
                        <Icon size={15} />
                    </Button>
                ))}
            </div>
        </DropdownMenuContent>
    );
};

export default TextOptions;