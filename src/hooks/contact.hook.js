import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import handleApiError from '@/lib/handleApiError';
import axios from 'axios';

export const useContact = ({ setAlert } = {}) => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/message-send/create`, data);
            return res.data;
        },
        onSuccess: (data) => {
            const successMsg = data?.message || "Message sent successfully!";
            toast.success(successMsg);

            if (setAlert) {
                setAlert({
                    type: "success",
                    message: successMsg,
                });
            }
        },
        onError: (error) => {
            handleApiError({ error, setAlert });
        },
    });
};