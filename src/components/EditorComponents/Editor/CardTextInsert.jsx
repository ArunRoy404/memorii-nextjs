import { Type } from 'lucide-react';

const CardTextInsert = () => {
    return (
        <div
            className='bg-[#F9FAFB] grid grid-cols-1 flex-1 min-w-70'
        >
            <div
                className='border border-dashed cursor-pointer flex gap-2 items-center text-subtitle font-semibold justify-center m-4'
            >
                <Type />
                <p>Add Text</p>
            </div>
            <div
                className='border border-dashed cursor-pointer text-center flex gap-2 items-center text-subtitle font-semibold justify-center m-4'
            >
                <p>Happy Birthday! <br />
                    I Hope You Have a Great Day</p>
            </div>
            <div
                className='border border-dashed cursor-pointer flex gap-2 items-center text-subtitle font-semibold justify-center m-4'
            >
                <Type />
                <p>Add Text</p>
            </div>
        </div>
    );
};

export default CardTextInsert;