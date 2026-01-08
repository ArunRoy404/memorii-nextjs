import { Image, Layers, MessageSquareMore, Sticker, Type } from "lucide-react";

const memoryOptionsData = [
    {
        icon: <Image />,
        label: 'Image',
        key: 'image',
    },
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
        icon: <Layers />,
        label: 'Layers',
        key: 'layers',
    },
]

export const memoryPromptsData = [
    {
        icon: <MessageSquareMore />,
        label: 'Prompts',
        key: 'prompts',
    },
]


export default memoryOptionsData