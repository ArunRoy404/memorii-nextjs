import { QueryClient, defaultShouldDehydrateQuery } from '@tanstack/react-query';
import { cache } from 'react';
import { DEFAULT_STALE_TIME } from './constants';

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