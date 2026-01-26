import { apiRequest } from '@/lib/apiRequest';
import { DEFAULT_STALE_TIME } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';


export const getCategories = () => apiRequest('/categories', 'categories');
export const getTemplates = () => apiRequest('/templates', 'templates');

export const useGetCategories = () => useQuery({ queryKey: ['categories'], queryFn: getCategories, staleTime: DEFAULT_STALE_TIME });
export const useGetTemplates = () => useQuery({ queryKey: ['templates'], queryFn: getTemplates, staleTime: DEFAULT_STALE_TIME });

