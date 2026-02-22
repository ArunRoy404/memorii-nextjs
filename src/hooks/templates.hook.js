import { apiRequest } from '@/lib/apiRequest';
import { DEFAULT_STALE_TIME } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';


export const getCategories = () => apiRequest('/categories', 'categories');
export const getTemplates = (page = 1, category = '', occasion = '') => {

    const params = new URLSearchParams({
        page: String(page), perPage: '16'
    })

    if (category) params.append('template', category)
    if (occasion) params.append('occasions', occasion)

    const uniqueTag = `templates-${category}-${occasion}-${page}`;

    return apiRequest(`/templates?${params.toString()}`, uniqueTag);
}

export const useGetCategories = () => useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: DEFAULT_STALE_TIME
});

export const useGetTemplates = (page = 1, category = '', occasion = '') => useQuery({
    queryKey: ['templates', page, category, occasion],
    queryFn: () => getTemplates(page, category, occasion),
    staleTime: DEFAULT_STALE_TIME
});

