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
            {/* 💡 FONT DROPDOWN IMPLEMENTATION */}
            <FontStyleSelection />

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