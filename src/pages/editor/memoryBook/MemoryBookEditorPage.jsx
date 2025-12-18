import MemoryEditor from '@/components/EditorComponents/Editor/MemoryEditor';
import TextOptionsMemory from '@/components/EditorComponents/TextOptions/TextOptionsMemory';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';


const MemoryBookEditorPage = () => {
    return (
        <div>

            {/* left options  */}
            <div
                className='h-10 w-10 sticky top-[50%] -translate-y-[50%] left-10 '
            >
                <Button
                    className='rounded-full'
                    size='icon'
                >
                    <Plus />
                </Button>

            </div>


            {/* center elements  */}
            <div
                className='container mx-auto px-4 lg:px-0 py-5 flex items-center justify-center relative'
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