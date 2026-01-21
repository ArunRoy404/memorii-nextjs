import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import HomePage from '@/templates/landing/HomePage';
import { prefetchHomeData } from '@/hooks/prefetch.hook';
import getQueryClient from '@/lib/getQueryClient';


const Home = async () => {
    const queryClient = getQueryClient();
    await prefetchHomeData(queryClient);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <HomePage />
        </HydrationBoundary>
    );
};

export default Home;