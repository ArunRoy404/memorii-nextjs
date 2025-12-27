import receivedImage from '@/assets/images/receivedImage.jpg'
import DashboardCard from '@/components/dashboardComponents/DashboardCard';


function ReceivedCardsPage() {
    const cards = Array(9).fill({
        title: 'Birthday Wishes for Mom',
        type: 'e-card',
        lastEdited: 'Last edited 2 days ago',
        status: 'Received',
        image: receivedImage,
        viewButton: true,
        downloadButton: true,
        copyButton: true,
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

export default ReceivedCardsPage;