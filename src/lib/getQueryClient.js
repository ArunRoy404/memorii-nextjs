import { QueryClient, defaultShouldDehydrateQuery } from '@tanstack/react-query';
import { cache } from 'react';

const DEFAULT_STALE_TIME = 5 * 60 * 1000;

const getQueryClient = cache(() => new QueryClient({
    defaultOptions: {
        queries: { staleTime: DEFAULT_STALE_TIME },
        dehydrate: {
            shouldDehydrateQuery: (query) =>
                defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
        },
    },
}));

export default getQueryClient;