import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import HomePage from '@/templates/landing/HomePage';
import { prefetchHomeData } from '@/hooks/prefetch.hook';


const Home = async () => {
    const queryClient = new QueryClient();
    await prefetchHomeData(queryClient);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <HomePage />
        </HydrationBoundary>
    );
};

export default Home;