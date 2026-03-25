import handleApiError from "@/lib/handleApiError";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../axios/useAxiosPrivate";
import { useECardStore } from "@/store/storeGuestIds/useECardStore";
import { useSession } from "next-auth/react";
import { toast } from "sonner";



export const useCreateECard = () => {
    const { setGuestToken, getGuestToken } = useECardStore()
    const axiosPrivate = useAxiosPrivate();
    const router = useRouter();
    const guest_token = getGuestToken();

    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post(`/e-card${guest_token ? `?guest_token=${guest_token}` : ""}`, data);
            return res?.data;
        },
        onMutate: () => {
            const toastId = toast.loading('Creating your E-Card...');
            return { toastId };
        },
        onSuccess: (res, _variables, context) => {
            const { id, guest_token, creator_id } = res.data;
            if (!creator_id && guest_token) {
                setGuestToken(guest_token);
            }
            toast.success('E-Card created successfully!', { id: context.toastId });
            router.push(`/e-card/${id}`);
        },
        onError: (error, _variables, context) => {
            handleApiError({ error, errorMessage: "Failed to create ECard" });
            toast.error(error?.message || 'Failed to create E-Card', { id: context.toastId });
        }
    })
}



export const useGetECard = (id) => {
    const { getGuestToken } = useECardStore()
    const guest_token = getGuestToken();
    const axiosPrivate = useAxiosPrivate();
    // const { status } = useSession();

    return useQuery({
        queryKey: ["ecard", id],
        queryFn: async () => {
            const res = await axiosPrivate.get(`/ecard/${id}${guest_token ? `?guest_token=${guest_token}` : ""}`);
            return res.data.data;
        },
        // enabled: !!axiosPrivate && status === "authenticated",
    });
};



export const useSaveECard = ({
    id,
    loadingMessage = 'Saving E-Card...',
    successMessage = 'E-Card Saved successfully!'
}) => {
    const axiosPrivate = useAxiosPrivate();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post(`/ecard/update-pages/${id}`, data);
            return res?.data;
        },
        onMutate: () => {
            const toastId = toast.loading(loadingMessage);
            return { toastId };
        },
        onSuccess: (res, _variables, context) => {
            toast.success(successMessage, { id: context.toastId });
        },
        onError: (error, _variables, context) => {
            handleApiError({ error, errorMessage: "Failed to save ECard" });
            toast.error(error?.message || 'Failed to save E-Card', { id: context.toastId });
        }
    })
}



export const useDeleteECard = (id, { onSuccess } = {}) => {
    const axiosPrivate = useAxiosPrivate();
    return useMutation({
        mutationFn: async () => {
            const res = await axiosPrivate.delete(`/ecard/delete/${id}`);
            return res?.data;
        },
        onMutate: () => {
            const toastId = toast.loading('Deleting E-Card...');
            return { toastId };
        },
        onSuccess: (res, _variables, context) => {
            toast.success('E-Card Deleted successfully!', { id: context.toastId });
            onSuccess?.()
        },
        onError: (error, _variables, context) => {
            handleApiError({ error, errorMessage: "Failed to delete ECard" });
            toast.error(error?.message || 'Failed to delete E-Card', { id: context.toastId });
        }
    })
}




export const useAddPageEcard = (id) => {
    const axiosPrivate = useAxiosPrivate();
    return useMutation({
        mutationFn: async () => {
            const res = await axiosPrivate.post(`/add-page/${id}`);
            return res?.data;
        },
        onMutate: () => {
            const toastId = toast.loading('adding new page...');
            return { toastId };
        },
        onSuccess: (res, _variables, context) => {
            toast.success('New page added successfully!', { id: context.toastId });
        },
        onError: (error, _variables, context) => {
            handleApiError({ error, errorMessage: "Failed to add new page" });
            toast.error(error?.message || 'Failed to add new page', { id: context.toastId });
        }
    })
}



export const useUpdateEcard = (id) => {
    const axiosPrivate = useAxiosPrivate();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post(`/ecard/update/${id}`, data);
            return res?.data;
        },
        onError: (error) => {
            handleApiError({ error, errorMessage: "Failed to update ECard" });
        }
    })
}


export const useDeletePageEcard = (id) => {
    const axiosPrivate = useAxiosPrivate();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.delete(`/remove/page/${id}`, { data });
            return res?.data;
        },
        onMutate: () => {
            const toastId = toast.loading('Deleting page...');
            return { toastId };
        },
        onSuccess: (res, _variables, context) => {
            toast.success('Page deleted successfully!', { id: context.toastId });
        },
        onError: (error, _variables, context) => {
            handleApiError({ error, errorMessage: "Failed to delete page" });
            toast.error(error?.message || 'Failed to delete page', { id: context.toastId });
        }
    })
}
