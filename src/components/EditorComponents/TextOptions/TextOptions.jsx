import { DropdownMenuContent } from "../../ui/dropdown-menu";
import {
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    TextAlignCenter,
    List,
} from "lucide-react";
import FontStyleSelection from "./FontStyleSelection";
import { Button } from "@/components/ui/button";
import FontSizeSelection from "./FontSizeSelection";
import TextColorPicker from "./TextColorPicker";


const ICONS = [
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    TextAlignCenter,
    List,
];

const TextOptions = () => {
    return (
        <DropdownMenuContent
            side="left"
            align="start"
            className="space-y-2 rounded-2xl p-3 text-center"
        >
            <FontStyleSelection />
            <FontSizeSelection />
            <TextColorPicker />



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