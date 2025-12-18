import FontStyleSelection from "./FontStyleSelection";
import FontSizeSelection from "./FontSizeSelection";
import TextColorPicker from "./TextColorPicker";
import TextStyles from "./TextStyles";
import TextAlignment from "./TextAlignment";

const TextOptionsMemory = () => {
    return (
        <div
            className="flex gap-1 bg-white shadow-md mx-auto items-center max-w-max rounded-2xl p-3"
        >
            <FontStyleSelection />
            <FontSizeSelection />
            <TextColorPicker />

            <div className="flex items-center gap-1">
                <TextStyles className='flex flex-row items-center' />
                <TextAlignment className='flex flex-row items-center' />
            </div>
        </div>
    );
};

export default TextOptionsMemory;