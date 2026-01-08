import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import verticalImg from '@/assets/layoutImages/verticalLayout.png';
import gridImg from '@/assets/layoutImages/gridLayout.png';

import gridJson from '@/demoTemplate/grid-layout-json.json';
import verticalJson from '@/demoTemplate/vertical-layout-json.json';
import { useEditorStore } from '@/store/useEditorStore';
import { toast } from 'sonner';

const LayoutModal = () => {
    const [selected, setSelected] = useState(null);
    const { chosenBookPage, setChosenBookPage } = useEditorStore()

    const layouts = [
        {
            id: 'vertical',
            title: 'Vertical',
            image: verticalImg.src,
            description: 'Standard single-column memory list',
            json: verticalJson
        },
        {
            id: 'grid',
            title: 'Grid',
            image: gridImg.src,
            description: '2x2 grid for compact memories',
            json: gridJson,
        }
    ];

    const handleApply = () => {
        if (selected) {
            setChosenBookPage(selected.json)
            toast.success('Layout applied successfully!')
        }
    };

    return (
        <Dialog open={!chosenBookPage}>
            {/* Responsive modal width and height */}
            <DialogContent showCloseButton={false} className="w-[95vw] max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col p-4 sm:p-6">
                <DialogHeader className="px-1">
                    <DialogTitle className="text-lg sm:text-2xl font-bold text-center">
                        Choose Memory Book Layout
                    </DialogTitle>
                    <DialogDescription className="text-center text-xs sm:text-base">
                        Select how you want your memories to be organized on the page.
                    </DialogDescription>
                </DialogHeader>

                {/* Changed grid-cols-1 to grid-cols-2 to ensure 2x2 layout on mobile.
                   Reduced gap on mobile (gap-3) to fit items better.
                */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 py-4 sm:py-6 overflow-y-auto">
                    {layouts.map((layout) => (
                        <div
                            key={layout.id}
                            onClick={() => setSelected(layout)}
                            className={`relative group cursor-pointer rounded-lg sm:rounded-xl border-2 transition-all overflow-hidden flex flex-col ${selected?.id === layout.id
                                ? 'border-primary ring-2 ring-primary/20'
                                : 'border-muted hover:border-muted-foreground/50'
                                }`}
                        >
                            {/* Header inside Card - Scaled down font for mobile */}
                            <div className={`py-1.5 px-2 text-center text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors ${selected?.id === layout.id ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                                }`}>
                                {layout.title}
                            </div>

                            {/* Image Preview - Aspect ratio helps maintain consistency in the 2x2 grid */}
                            <div className="relative bg-slate-100 aspect-[3/4] sm:aspect-auto overflow-hidden">
                                <img
                                    src={layout.image}
                                    alt={layout.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <DialogFooter className="flex flex-row sm:justify-end gap-2 border-t pt-4 mt-auto">
                    <Button
                        disabled={!selected}
                        onClick={handleApply}
                        className="w-full sm:w-auto px-4 sm:px-8 text-sm sm:text-base"
                    >
                        Apply <span className="hidden sm:inline ml-1">Layout</span> <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default LayoutModal;