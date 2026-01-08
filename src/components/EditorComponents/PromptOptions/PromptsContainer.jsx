const PromptsContainer = ({ onSelectPrompt }) => {
    const prompts = [
        "How did we first meet?",
        "Your first impression of me?",
        "My best personality trait?",
        "A song that reminds you of us?",
        "One thing you've learned from me?",
        "Your favorite memory of us?",
        "Describe me in three emojis.",
        "What is my hidden talent?",
        "What's our funniest moment?",
        "Where should we travel next?",
        "What do I do that makes you laugh?",
        "What's a habit of mine you like?",
        "How have I inspired you?",
        `What's our "signature" activity?`,
        "If I were an animal, which one?",
        "What's one word for our bond?",
        "What surprised you about me?",
        "My go-to coffee or drink order?",
        "What's one thing we agree on?",
        "Best meal we've shared?",
    ];



    return (
        <div className="flex flex-col gap-4 mt-4 max-h-[350px] overflow-y-auto pr-2 overflow-x-hidden transition-all">
            {prompts.map((question, index) => (
                <button
                    key={index}
                    onClick={() => onSelectPrompt?.(question)}
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