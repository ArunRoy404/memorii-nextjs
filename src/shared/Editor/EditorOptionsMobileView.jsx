import ImageDrawer from "@/components/EditorComponents/Drawer/ImageDrawer";
import LayerDrawer from "@/components/EditorComponents/Drawer/LayerDrawer";
import PromptDrawer from "@/components/EditorComponents/Drawer/PromptDrawer";
import StickersDrawer from "@/components/EditorComponents/Drawer/StickersDrawer";
import TextOptionsDrawer from "@/components/EditorComponents/Drawer/TextOptionsDrawer";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/useEditorStore";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import EditorDrawer from "./EditorDrawer/EditorDrawer";



const EditorOptionsMobileView = () => {
    const { pages, addPage, currentPage } = useEditorStore()
    const [isMemoryPage, setIsMemoryPage] = useState(false)

    useEffect(() => {
        const pageJson = pages[currentPage]
        if (!pageJson?.layout) return
        const state = pageJson?.layout === 'blank' ? false : true;
        setIsMemoryPage(state)

    }, [currentPage])



    return (
        <div className="flex md:hidden items-center gap-4">
            {
                !isMemoryPage ? (
                    <>
                        <EditorDrawer />
                        {/* <TextOptionsDrawer />
                        <StickersDrawer />
                        <ImageDrawer />
                        <LayerDrawer /> */}
                        <Button
                            onClick={() => addPage()}
                            variant='ghost' size="sm" className='p-0!'>
                            <Plus />
                        </Button>
                    </>
                ) : (
                    <>
                        <PromptDrawer />
                    </>
                )
            }

        </div>
    );
};

export default EditorOptionsMobileView;