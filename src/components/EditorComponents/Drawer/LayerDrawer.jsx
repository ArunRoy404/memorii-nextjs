import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Layers } from "lucide-react";
import LayersList from "../LayersList/LayersList";



const LayerDrawer = () => {
    return (
        <Drawer>
            <DrawerTrigger>
                <Layers size={15} />
            </DrawerTrigger>


            <DrawerContent>
                <DrawerHeader style={{ display: "none" }}>
                    <DrawerTitle>Manage Layers</DrawerTitle>
                </DrawerHeader>


                <div
                    className="overflow-auto p-4"
                >
                    <LayersList />
                </div>
            </DrawerContent>
        </Drawer>
    );
};


export default LayerDrawer;