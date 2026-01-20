import ContactUsPage from '@/templates/landing/ContactUsPage';
import { prefetchContactData } from '@/hooks/prefetch.hook';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/lib/getQueryClient';

const contact = async () => {
    const queryClient = getQueryClient()
    await prefetchContactData(queryClient)

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ContactUsPage />
        </HydrationBoundary>
    )
}
export default contact;