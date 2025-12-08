import { DiscardEditsDialog } from "@/components/EditorComponents/DiscardEditsDialog";
import { Button } from "@/components/ui/button";
import { Undo2, Redo2, UserPlus } from "lucide-react";

const EditorTopBar = () => {
    return (
        <div className="p-4 bg-white shadow">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">

                {/* Top / Left: Exit */}
                <div className="w-full sm:w-auto flex justify-between sm:justify-start items-center">
                    <DiscardEditsDialog />

                    {/* Undo/Redo on mobile next to Exit */}
                    <div className="flex items-center gap-2 sm:hidden">
                        <Button variant='ghost' size="sm">
                            <Undo2 className="w-4 h-4" />
                        </Button>
                        <Button variant='ghost' size="sm">
                            <Redo2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Center / desktop: Undo/Redo */}
                <div className="hidden sm:flex items-center gap-2">
                    <Button variant='ghost' size="sm">
                        <Undo2 className="w-5 h-5" />
                    </Button>
                    <Button variant='ghost' size="sm">
                        <Redo2 className="w-5 h-5" />
                    </Button>
                </div>

                {/* Right / bottom: Invite + Preview */}
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                    <Button variant='outline' size="sm" className="flex items-center gap-1 justify-center w-full sm:w-auto">
                        <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                        Invite
                    </Button>
                    <Button size="sm" className="w-full sm:w-auto">
                        Preview
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default EditorTopBar;
