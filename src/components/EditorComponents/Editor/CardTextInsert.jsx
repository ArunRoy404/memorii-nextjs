import { addText } from '@/services/Editor';
import { useEditorStore } from '@/store/useEditorStore';
import { Type } from 'lucide-react';

const CardTextInsert = () => {
    const { editorRef } = useEditorStore()

    const handleAddText = ({ text }) => {
        if (!!text) {
            addText({ text, fontFamily: 'Arial', ref: editorRef })
            return
        }
        addText({ fontFamily: 'Arial', ref: editorRef })
    }

    return (
        <div
            className='bg-[#F9FAFB] grid grid-cols-1 flex-1 min-w-70'
        >
            <div
                onClick={handleAddText}
                className='border border-dashed cursor-pointer flex gap-2 items-center text-subtitle font-semibold justify-center m-4'
            >
                <Type />
                <p
                >Add Text</p>
            </div>
            <div
                onClick={() => handleAddText({ text: 'Happy Birthday! I Hope You Have a Great Day' })}
                className='border border-dashed cursor-pointer text-center flex gap-2 items-center text-subtitle font-semibold justify-center m-4'
            >
                <p>Happy Birthday! <br />
                    I Hope You Have a Great Day</p>
            </div>
            <div
                onClick={handleAddText}
                className='border border-dashed cursor-pointer flex gap-2 items-center text-subtitle font-semibold justify-center m-4'
            >
                <Type />
                <p>Add Text</p>
            </div>
        </div>
    );
};

export default CardTextInsert;