import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { MessageSquareMore } from "lucide-react";
import PromptsContainer from "../PromptOptions/PromptsContainer";



const PromptDrawer = () => {
    return (
        <Drawer>
            <DrawerTrigger>
                <MessageSquareMore size={15} />
            </DrawerTrigger>


            <DrawerContent>
                <DrawerHeader style={{ display: "none" }}>
                    <DrawerTitle>Manage Layers</DrawerTitle>
                </DrawerHeader>


                <div
                    className="overflow-auto p-4"
                >
                    <PromptsContainer />
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default PromptDrawer;