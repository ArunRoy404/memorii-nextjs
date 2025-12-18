import MemoryEditor from '@/components/EditorComponents/Editor/MemoryEditor';
import MemoryOptions from '@/components/EditorComponents/MemoryOptions';
import TextOptionsMemory from '@/components/EditorComponents/TextOptions/TextOptionsMemory';
import { Button } from '@/components/ui/button';
import { useEditorStore } from '@/store/useEditorStore';
import { Plus } from 'lucide-react';


const MemoryBookEditorPage = () => {
    const { addPage } = useEditorStore();

    return (
        <div>
            {/* left options  */}
            <div
                className='max-w-max max-h-max flex flex-col gap-6 items-center fixed top-[50%] -translate-y-[50%] left-10'
            >
                <MemoryOptions />

                <Button
                    className='rounded-full'
                    size='icon'
                >
                    <Plus />
                </Button>

            </div>


            {/* center elements  */}
            <div
                className='max-w-max max-h-max mx-auto px-4 lg:px-0 py-10 flex items-center justify-center relative'
            >
                <div
                    className='flex flex-col gap-5'
                >
                    <div
                        className='sticky top-10 z-1'
                    >
                        <TextOptionsMemory />
                    </div>
                    <MemoryEditor />
                    <div
                        onClick={() => addPage()}
                        className='flex items-center gap-2 w-full justify-center border-2 rounded-full py-2 cursor-pointer'
                    >
                        <Plus />
                        <p>Add Page</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MemoryBookEditorPage;