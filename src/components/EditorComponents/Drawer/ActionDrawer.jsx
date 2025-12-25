import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { PanelBottom } from "lucide-react";



const ActionDrawer = ({ children }) => {
    return (
        <Drawer>
            <DrawerTrigger>
                <PanelBottom size={15} />
            </DrawerTrigger>


            <DrawerContent>
                <DrawerHeader style={{ display: "none" }}>
                    <DrawerTitle>Manage Stickers</DrawerTitle>
                </DrawerHeader>


                <div
                    className="p-4 space-y-2"
                >
                    {children}
                </div>
            </DrawerContent>
        </Drawer>
    );
};


export default ActionDrawer;