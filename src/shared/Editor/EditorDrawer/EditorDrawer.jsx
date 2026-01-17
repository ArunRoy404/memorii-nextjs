import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Edit } from "lucide-react";
import EditorDrawerContainer from "./EditorDrawerContainer";


const EditorDrawer = () => {
    return (
        <Drawer>
            <DrawerTrigger >
                <Edit size={15} />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerTitle></DrawerTitle>
                <DrawerFooter>
                    <EditorDrawerContainer />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default EditorDrawer;