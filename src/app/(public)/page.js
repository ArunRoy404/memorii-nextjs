import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import HomePage from '@/pages/landing/HomePage';
import { getDynamicSections } from '@/hooks/cms.hook';


export async function generateMetadata() {
    const sections = await getDynamicSections();
    const hero = sections?.find(s => s.section === 'hero_section');

    return {
        title: hero?.title,
        description: hero?.short_description,
        openGraph: {
            images: [hero?.photo],
        },
    };
}


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