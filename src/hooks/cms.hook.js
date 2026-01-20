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
export const useGetSections = () => {
    return useQuery({
        queryKey: ['dynamic-sections'],
        queryFn: getDynamicSections,
        staleTime: 60 * 1000,
    });
};

export const useGetSlider = () => {
    return useQuery({
        queryKey: ['slider'],
        queryFn: getSlider,
        staleTime: 60 * 1000,
    });
};

// Work Steps
export const getWorkSteps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work-steps`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetWorkSteps = () => {
    return useQuery({
        queryKey: ['work-steps'],
        queryFn: getWorkSteps,
        staleTime: 60 * 1000,
    });
};

// FAQs
export const getFaqs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faq`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetFaqs = () => {
    return useQuery({
        queryKey: ['faqs'],
        queryFn: getFaqs,
        staleTime: 60 * 1000,
    });
};