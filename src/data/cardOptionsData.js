import { Image, Layers, LayoutPanelLeft, Sticker, Type } from "lucide-react";

const cardOptionsData = [
    // {
    //     icon: <LayoutPanelLeft />,
    //     label: 'Layout',
    //     key: 'layout',
    // },
    {
        icon: <Type />,
        label: 'Text',
        key: 'text',
    },
    {
        icon: <Sticker />,
        label: 'Sticker',
        key: 'sticker',
    },
    {
        icon: <Image />,
        label: 'Image',
        key: 'image',
    },
    {
        icon: <Layers />,
        label: 'Layers',
        key: 'layers',
    },
]


export default cardOptionsData