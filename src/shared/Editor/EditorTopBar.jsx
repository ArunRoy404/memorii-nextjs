import { DiscardEditsDialog } from "@/components/EditorComponents/DiscardEditsDialog";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/useEditorStore";
import { Undo2, Redo2, UserPlus } from "lucide-react";
import Link from "next/link";

const EditorTopBar = () => {
    const { saveCurrentPage } = useEditorStore()


    return (
        <div className="p-4 bg-white shadow">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">

                {/* Top / Left: Exit */}
                <div className="w-full sm:w-auto flex justify-between sm:justify-start items-center">
                    <DiscardEditsDialog />

                    {/* Undo/Redo on mobile next to Exit */}
                    <div className="flex items-center md:gap-2 sm:hidden">
                        <Button variant='ghost' size="sm" className='p-2!'>
                            <Undo2 className="w-4 h-4 " />
                        </Button>
                        <Button variant='ghost' size="sm" className='p-2!'>
                            <Redo2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Center / desktop: Undo/Redo */}
                <div className="hidden md:flex items-center gap-2">
                    <Button variant='ghost' size="sm">
                        <Undo2 className="w-5 h-5" />
                    </Button>
                    <Button variant='ghost' size="sm">
                        <Redo2 className="w-5 h-5" />
                    </Button>
                </div>


                {/* Right / bottom: Invite + Preview */}
                <div className="hidden md:flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                    <Button variant='outline' size="sm" className="flex items-center gap-1 justify-center w-full sm:w-auto">
                        <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                        Invite
                    </Button>
                    <Link href="/preview" className="w-full">
                        <Button
                            onClick={saveCurrentPage}
                            size="sm" className="w-full md:w-auto">
                            Preview
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default EditorTopBar;
