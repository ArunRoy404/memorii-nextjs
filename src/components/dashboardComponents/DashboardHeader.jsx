import React from 'react';

const DashboardHeader = ({ title, description }) => {
    return (
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-dashboard-primary mb-2">{title}</h3>
            <p className="text-icon text-sm">{description}</p>
        </div>
    );
};

export default DashboardHeader;