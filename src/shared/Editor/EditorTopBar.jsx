import { DiscardEditsDialog } from "@/components/EditorComponents/DiscardEditsDialog";
import ActionDrawer from "@/components/EditorComponents/Drawer/ActionDrawer";
import RedoUndo from "@/components/EditorComponents/RedoUndo/RedoUndo";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/useEditorStore";
import { UserPlus } from "lucide-react";
import Link from "next/link";
import EditorOptionsMobileView from "./EditorOptionsMobileView";
import ClearPageButton from "@/components/EditorComponents/ClearPageButton";
import DeletePageButton from "@/components/EditorComponents/DeletePageButton";
import EditorTitle from "@/components/EditorComponents/EditorTitle/EditorTitle";
import EcardTimer from "@/components/EditorComponents/EcardTimer";
import { useParams } from "next/navigation";
import PreviewButton from "@/components/EditorComponents/PreviewButton/PreviewButton";

const EditorTopBar = () => {
    const { saveCurrentPage } = useEditorStore()
    const { templateId } = useParams()

    return (
        <div className="p-4 bg-white shadow">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">

                {/* Top / Left: Exit */}
                <div className="w-full sm:w-auto flex justify-between sm:justify-start items-center">

                    <div className="flex items-center gap-4">
                        <DiscardEditsDialog />
                        <EcardTimer />
                        <EditorTitle />
                    </div>


                    {/* Undo/Redo on mobile next to Exit */}
                    <div className="flex items-center gap-4 sm:hidden">
                        <EditorOptionsMobileView />

                        <RedoUndo className="flex items-center gap-2" />

                        <ActionDrawer>
                            <Button variant='outline' size="sm" className="flex items-center gap-1 justify-center w-full sm:w-auto">
                                <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                                Invite
                            </Button>
                            <Link href={`/preview/${templateId}`} className="w-full">
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
                    {/* <Button size="sm" onClick={() => addMemoryLayoutGridImage({ ref: editorRef })} >
                        add Grid layout Image
                    </Button>


                    <Button size="sm" onClick={() => addMemoryLayoutVerticalImage({ ref: editorRef })} >
                        add vertical layout Image
                    </Button>

                    <Button size="sm" onClick={() => addMemoryLayoutVertical({ ref: editorRef })} >
                        add vertical layout
                    </Button>

                    <Button size="sm" onClick={() => addMemoryLayoutGrid({ ref: editorRef })} >
                        add grid layout
                    </Button> */}
                    <DeletePageButton />

                    <ClearPageButton />

                    <Button variant='outline' size="sm" className="flex items-center gap-1 justify-center w-full sm:w-auto">
                        <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                        Invite
                    </Button>
                    <PreviewButton />
                </div>

            </div>
        </div>
    );
};

export default EditorTopBar;
