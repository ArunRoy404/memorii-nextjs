import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import HomePage from '@/pages/landing/HomePage';
import { getDynamicSections } from '@/hooks/cms.hook';



const Home = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['dynamic-sections'],
        queryFn: getDynamicSections,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <HomePage />
        </HydrationBoundary>
    );
};

export default Home;