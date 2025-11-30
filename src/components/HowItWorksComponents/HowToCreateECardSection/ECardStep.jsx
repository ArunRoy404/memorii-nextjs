const ECardStep = ({ step }) => {
    const { step: stepText, icon: Icon } = step
    return (
        <div className="hover:scale-103 transition-ease-in-out flex items-center gap-2.5 border border-icon/25 rounded-lg p-2 md:p-2.5">
            <div>
                <Icon />
            </div>
            <p className="text-xs md:text-base text-icon font-medium">{stepText}</p>
        </div>
    );
};

export default ECardStep;