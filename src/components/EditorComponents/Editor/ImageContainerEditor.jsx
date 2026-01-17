import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useEditorStore } from '@/store/useEditorStore';
import { addImage } from '@/services/Editor';

const ImageContainerEditor = () => {
    const { editorRef } = useEditorStore();
    const [images, setImages] = useState([]);

    // Trigger file picker programmatically
    const handleUploadClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.onchange = handleImageAdd;
        input.click();
    };


    // Add image(s) to canvas and save to history
    const handleImageAdd = async (e) => {
        if (editorRef?.layout !== 'blank') return
        const files = Array.from(e.target.files);
        if (!files.length) return;

        for (const file of files) {
            const reader = new FileReader();

            reader.onload = async () => {
                await addImage({ img: reader.result, ref: editorRef })
                setImages(prev => [...prev, reader.result]);
            };

            reader.readAsDataURL(file);
        }
        e.target.value = "";
    };



    // Add image from history
    const handleAddFromHistory = async (src) => {
        if (editorRef?.layout !== 'blank') return
        await addImage({ img: src, ref: editorRef })
    };


    return (
        <div>
            <Button className="w-full mb-4" onClick={handleUploadClick}>
                Upload Files
            </Button>

            <p className="py-2 font-semibold">Image History</p>
            <div className="grid grid-cols-2 gap-2 max-h-70 overflow-y-auto md:max-h-auto">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`uploaded-${index}`}
                        className="w-full h-24 object-cover rounded border border-gray-300 cursor-pointer"
                        onClick={() => handleAddFromHistory(src)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageContainerEditor;