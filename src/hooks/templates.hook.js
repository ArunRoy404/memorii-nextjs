import { useQuery } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 5 * 60 * 1000;

export const getTemplates = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/templates`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetTemplates = () => {
    return useQuery({
        queryKey: ['templates'],
        queryFn: getTemplates,
        staleTime: DEFAULT_STALE_TIME,
    });
};


export const getCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: DEFAULT_STALE_TIME,
    });
};