import bookImage from '@/assets/images/bookImage.jpg'
import DashboardCard from '@/components/dashboardComponents/DashboardCard';


const ActiveEMemoryBook = () => {
    const cards = Array(9).fill({
        title: "Sarah's Wedding Memory Book",
        type: 'e-memory-book',
        lastEdited: 'Last edited 1 days ago',
        status: 'Active',
        image: bookImage,
        viewButton: true,
        editButton: true,
    });


    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <DashboardCard key={index} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActiveEMemoryBook;