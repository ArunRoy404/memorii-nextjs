import { promptsList } from "@/data/promptsList";
import { toast } from "sonner";

const PromptsContainer = ({ onSelectPrompt }) => {

    const handleSelect = (prompt) => {
        toast(`Selected: ${prompt}`);
    };



    return (
        <div className="flex flex-col gap-4 mt-4 max-h-[350px] overflow-y-auto pr-2 overflow-x-hidden transition-all">
            {promptsList.map((question, index) => (
                <button
                    key={index}
                    onClick={() => handleSelect(question)}
                    className="cursor-pointer group w-full text-left focus:outline-none py-1"
                >
                    <p className="text-sm sm:text-[15px] font-medium text-muted-foreground transition-colors duration-200 group-hover:text-black">
                        <span className="relative inline-block pb-0.5">
                            {index + 1}. {question}
                            {/* Underline Hover Effect */}
                            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
                        </span>
                    </p>
                </button>
            ))}
        </div>
    );
};

export default PromptsContainer;