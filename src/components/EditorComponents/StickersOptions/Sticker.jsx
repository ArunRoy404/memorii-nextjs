import { useEditorStore } from '@/store/useEditorStore';
import { addSticker } from '@/services/Editor';

const Sticker = ({ icon: Icon, url }) => {
    const { editorRef } = useEditorStore()

    const handleAddSticker = () => [
        addSticker({ svgURL: url, editorRef })
    ]



    return (
        <div
            className='cursor-pointer w-2!'
            onClick={handleAddSticker}
        >
            <Icon className='w-20' />
        </div>
    );
};

export default Sticker;