import { apiRequest } from '@/lib/apiRequest';
import { DEFAULT_STALE_TIME } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';


export const getCategories = () => apiRequest('/categories', 'categories');
export const getTemplates = (page = 1) => apiRequest(`/templates?page=${page}&per_page=16`, `templates-page-${page}`);

export const useGetCategories = () => useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: DEFAULT_STALE_TIME
});

export const useGetTemplates = (page = 1) => useQuery({
    queryKey: ['templates', page],
    queryFn: () => getTemplates(page),
    staleTime: DEFAULT_STALE_TIME
});

