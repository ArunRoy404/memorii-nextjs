import { DiscardEditsDialog } from "@/components/EditorComponents/DiscardEditsDialog";
import ActionDrawer from "@/components/EditorComponents/Drawer/ActionDrawer";
import RedoUndo from "@/components/EditorComponents/RedoUndo/RedoUndo";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/useEditorStore";
import { UserPlus } from "lucide-react";
import Link from "next/link";
import EditorOptionsMobileView from "./EditorOptionsMobileView";

const EditorTopBar = () => {
    const { saveCurrentPage, addPage, editorRef } = useEditorStore()


    return (
        <div className="p-4 bg-white shadow">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">

                {/* Top / Left: Exit */}
                <div className="w-full sm:w-auto flex justify-between sm:justify-start items-center">

                    <DiscardEditsDialog />


                    <EditorOptionsMobileView />


                    {/* Undo/Redo on mobile next to Exit */}
                    <div className="flex items-center gap-2 sm:hidden">

                        <RedoUndo className="flex items-center gap-2" />

                        <ActionDrawer>
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
                        </ActionDrawer>
                    </div>
                </div>



                {/* Center / desktop: Undo/Redo */}
                <RedoUndo className="hidden md:flex items-center gap-4" />


                {/* Right / bottom: Invite + Preview */}
                <div className="hidden md:flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">

                    {/* test buttons  */}
                    {/* <Button size="sm" onClick={() => addMemoryLayoutVertical({ ref: editorRef })} >
                        add vertical  layout
                    </Button>

                    <Button size="sm" onClick={() => addMemoryLayoutGrid({ ref: editorRef })} >
                        add grid layout
                    </Button> */}


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
