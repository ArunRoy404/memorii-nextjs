const ECardStep = ({ step, Icon }) => {
    return (
        <div className="hover:scale-103 transition-ease-in-out flex items-center gap-2.5 border border-icon/25 rounded-lg p-2 md:p-2.5">
            <div>
                <Icon />
            </div>
            <p className="text-xs md:text-base text-icon font-medium">{step}</p>
        </div>
    );
};

export default ECardStep;