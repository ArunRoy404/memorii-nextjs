import { Check, SquarePen } from 'lucide-react';
import React from 'react';

const LayoutDropdown = () => {
    return (
        <div className="space-y-3 relative">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Layout</h3>
                <button
                    onClick={() => {
                        setActiveTab(null)
                        setOpen(false)
                    }}
                    className="text-muted-foreground hover:text-black"
                >
                    ✕
                </button>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-2 gap-3">
                {/* Blank Layout */}
                <div className="relative flex flex-col gap-1 items-center justify-center border rounded-lg p-2 cursor-pointer hover:border-primary group">
                    <SquarePen />
                    <p className="text-xs">Blank</p>

                    {/* Active Check */}
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                        <Check />
                    </div>
                </div>


                {/* Single Text Layout */}

                <div className="cursor-pointer hover:border-primary aspect-3/4 border rounded-lg flex items-center justify-center text-sm font-semibold">
                    T
                </div>



                {/* Multi Text Layout */}
                <div className="cursor-pointer hover:border-primary aspect-3/4 border gap-3 rounded-lg grid grid-cols-1 p-2">
                    <div className="w-full border rounded-md text-xs flex items-center justify-center">T</div>
                    <div className="w-full border rounded-md text-xs flex items-center justify-center">T</div>
                    <div className="w-full border rounded-md text-xs flex items-center justify-center">T</div>
                </div>
            </div>
        </div>
    );
};

export default LayoutDropdown;