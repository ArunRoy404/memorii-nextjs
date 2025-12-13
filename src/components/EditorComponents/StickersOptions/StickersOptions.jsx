import React from 'react';
import { DropdownMenuContent } from '../../ui/dropdown-menu';
import { Balloon, Bear, Cake, Cherry, } from '../../svg/Stickers';
import Sticker from './Sticker';


const stickers = [
    {
        icon: Cherry,
        url: '/assets/stickers/cherry.svg'
    },
    {
        icon: Cake,
        url: '/assets/stickers/cake.svg'
    },
    {
        icon: Bear,
        url: '/assets/stickers/bear.svg'
    },
    {
        icon: Balloon,
        url: '/assets/stickers/balloon.svg'
    },
    {
        icon: Cherry,
        url: '/assets/stickers/cherry.svg'
    },
    {
        icon: Cake,
        url: '/assets/stickers/cake.svg'
    },
    {
        icon: Bear,
        url: '/assets/stickers/bear.svg'
    },
    {
        icon: Balloon,
        url: '/assets/stickers/balloon.svg'
    },
    {
        icon: Cherry,
        url: '/assets/stickers/cherry.svg'
    },
    {
        icon: Cake,
        url: '/assets/stickers/cake.svg'
    },
    {
        icon: Bear,
        url: '/assets/stickers/bear.svg'
    },
    {
        icon: Balloon,
        url: '/assets/stickers/balloon.svg'
    },
]


const stickersOptions = ({ setActiveTab, setOpen }) => {
    return (
        <DropdownMenuContent side="left" align="start" className="w-80 p-4">
            <div className="space-y-3 relative">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">stickers</h3>
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
                <div className="grid grid-cols-3 gap-3">
                    {
                        stickers.map(({ icon, url }, i) => <Sticker key={i} icon={icon} url={url} />)
                    }

                </div>
            </div>

        </DropdownMenuContent>
    );
};

export default stickersOptions;