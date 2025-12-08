import React from 'react';
import { DropdownMenuContent } from '../ui/dropdown-menu';
import { Bold, BoldIcon, ItalicIcon, List, StrikethroughIcon, TextAlignCenter, UnderlineIcon } from 'lucide-react';
import { Button } from '../ui/button';


const icons = [
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    TextAlignCenter,
    List
]

const TextOptions = () => {
    return (
        <DropdownMenuContent side="left" align="start" className="space-y-2 p-3 text-center rounded-2xl">
            <p
                className='border rounded-md p-1'
            >
                Inter
            </p>
            <p
                className='border rounded-md p-1'
            >
                - 27 +
            </p>

            <div
                className='flex flex-col items-center'
            >
                A
                <div className="w-6 h-1 rounded-[10px] bg-[linear-gradient(90deg,#E0320E_0%,#FE8E00_17.78%,#FACE00_30.77%,#9FFE01_49.61%,#66FE35_66.35%,#01C3FD_86.15%,#0836E6_100%)]"></div>
            </div>
            {
                icons.map((Icon, index) => (
                    <Button
                        variant={'ghost'}
                        key={index}
                        className='flex flex-col items-center mx-auto py-0!'
                    >
                        <Icon size={15} />
                    </Button >
                ))
            }
        </DropdownMenuContent>
    );
};

export default TextOptions;