import React from "react";
import { DropdownMenuContent } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    TextAlignCenter,
    List,
} from "lucide-react";

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
            <p className="rounded-md border p-1">Inter</p>

            <p className="rounded-md border p-1">- 27 +</p>

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
