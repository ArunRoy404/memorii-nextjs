// src/hooks/useSections.js
import { useQuery } from '@tanstack/react-query';

// This is the function that actually fetches the data
export const getDynamicSections = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/dynamic-section`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const getSlider = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/slider`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

// This is your reusable hook
export const useSections = () => {
    return useQuery({
        queryKey: ['dynamic-sections'],
        queryFn: getDynamicSections,
        staleTime: 60 * 1000,
    });
};

export const useSlider = () => {
    return useQuery({
        queryKey: ['slider'],
        queryFn: getSlider,
        staleTime: 60 * 1000,
    });
};