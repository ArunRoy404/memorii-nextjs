import { addText } from '@/services/Editor';
import { useEditorStore } from '@/store/useEditorStore';
import { useTextObjectStore } from '@/store/useTextObjectStore';
import { Type } from 'lucide-react';

const CardTextInsert = () => {
    const { editorRef } = useEditorStore()
    const { currentFontFamily, currentFontSize } = useTextObjectStore()

    console.log(currentFontFamily);

    const handleAddText = ({ text }) => {
        if (!!text) {
            addText({ text, fontFamily: currentFontFamily, fontSize: currentFontSize, ref: editorRef })
            return
        }
        addText({ fontFamily: currentFontFamily, fontSize: currentFontSize, ref: editorRef })
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