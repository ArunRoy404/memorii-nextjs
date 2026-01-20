import ContactUsPage from '@/templates/landing/ContactUsPage';
import { prefetchContactData } from '@/hooks/prefetch.hook';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const contact = async () => {
    const queryClient = new QueryClient()
    await prefetchContactData(queryClient)

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ContactUsPage />
        </HydrationBoundary>
    )
}
export default contact;