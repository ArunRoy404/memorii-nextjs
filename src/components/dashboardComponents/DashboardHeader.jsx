const DashboardHeader = ({ title, description }) => {
    return (
        <div className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-dashboard-primary mb-1 md:mb-2">
                {title}
            </h3>
            <p className="text-icon text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default DashboardHeader;