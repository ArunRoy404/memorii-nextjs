import { DEFAULT_REVALIDATE_TIME } from './constants';


export const apiRequest = async (endpoint, tag) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) throw new Error('NEXT_PUBLIC_BASE_URL is not defined in environment variables');


    const res = await fetch(`${baseUrl}${endpoint}`, {
        next: {
            revalidate: DEFAULT_REVALIDATE_TIME,
            tags: [tag]
        }
    });


    if (!res.ok) {
        let errorMessage = `Network response error at ${endpoint}`;
        try {
            const errorBody = await res.json();
            if (errorBody && errorBody.message) {
                errorMessage = errorBody.message;
            }
        } catch (e) {
            // If json parsing fails, stick to generic error
        }
        throw new Error(errorMessage);
    }

    const result = await res.json();
    return result.data;
};
